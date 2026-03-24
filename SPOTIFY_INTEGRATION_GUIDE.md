# Spotify API Integration Guide for FeaturedReleases Component

## Overview
The `FeaturedReleases` component has a placeholder for Spotify integration. Currently, when users click the "Play on Spotify" button, it's a placeholder. This guide walks through setting up real Spotify playback.

---

## Step 1: Register Your Application on Spotify Developer Console

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account (create if needed - free account is fine)
3. Click **"Create an App"**
4. Accept the terms and create the app
5. You'll receive:
   - **Client ID**
   - **Client Secret** (keep this private!)
   - **Redirect URI** (set this to your app's URL, e.g., `http://localhost:5173/LedNG/callback`)

---

## Step 2: Environment Variables Setup

Create a `.env` file in your project root:

```env
VITE_SPOTIFY_CLIENT_ID=your_client_id_here
VITE_SPOTIFY_REDIRECT_URI=http://localhost:5173/LedNG/callback
```

**Note:** Prefix with `VITE_` so Vite exposes it to the client.

---

## Step 3: Install Spotify Web API SDK

```bash
npm install spotify-web-api-js
```

---

## Step 4: Create Spotify Auth Service

Create `src/services/spotifyAuth.ts`:

```typescript
// Spotify OAuth credentials
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const SCOPES = [
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-modify-playback-state",
  "user-read-playback-state",
];

export const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES.join(" "))}`;

export const getAccessToken = async (code: string) => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`)}`,
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
    }),
  });
  return response.json();
};
```

---

## Step 5: OAuth Flow Implementation

### 5a. Login Button (somewhere in your app)
```typescript
const handleSpotifyLogin = () => {
  window.location.href = spotifyAuthUrl;
};

<button onClick={handleSpotifyLogin}>Login with Spotify</button>
```

### 5b. Callback Handler Page
Create `src/pages/SpotifyCallback.tsx`:

```typescript
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SpotifyCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      // Store code and exchange for token
      localStorage.setItem("spotify_auth_code", code);
      // Redirect to home or player page
      navigate("/");
    }
  }, [navigate]);

  return <div>Authenticating with Spotify...</div>;
}
```

Add to your routes in `App.tsx`:
```typescript
<Route path="/callback" element={<SpotifyCallback />} />
```

---

## Step 6: Implement Play Functionality in FeaturedReleases

Update the `handlePlayClick` function in `src/components/FeaturedReleases.tsx`:

```typescript
const handlePlayClick = async () => {
  try {
    const accessToken = localStorage.getItem("spotify_access_token");
    
    if (!accessToken) {
      alert("Please login with Spotify first");
      // Redirect to login: window.location.href = spotifyAuthUrl;
      return;
    }

    const response = await fetch(
      "https://api.spotify.com/v1/me/player/play",
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uris: [release.spotifyUrl], // Spotify URI format: spotify:track:xxxxx
        }),
      }
    );

    if (response.ok) {
      console.log("Playing:", release.title);
    } else {
      console.error("Playback failed");
    }
  } catch (error) {
    console.error("Error playing track:", error);
  }
};
```

---

## Step 7: Get Spotify Track URIs

You need to update your data file with actual Spotify track URIs.

### Option A: Manually via Spotify Web Player
1. Find track on Spotify
2. Right-click → Share → Copy Spotify URI
3. Format: `spotify:track:1234567890abcdef`

### Option B: Programmatic via Spotify Search API
```typescript
const searchSpotifyTrack = async (title: string, artist: string) => {
  const query = `track:${title} artist:${artist}`;
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const data = await response.json();
  return data.tracks.items[0].uri; // Returns: spotify:track:xxxxx
};
```

Update `FeaturedReleasesData.ts`:
```typescript
spotifyUrl: "spotify:track:1234567890abcdef", // Real Spotify URI
```

---

## Step 8: Store Access Token Securely

After OAuth login, store the token in localStorage (or preferably in a secure httpOnly cookie).

Example token storage after receiving `access_token`:
```typescript
localStorage.setItem("spotify_access_token", accessToken);
localStorage.setItem("spotify_token_expires", expiresIn); // Refresh if needed
```

---

## Step 9: Handle Token Refresh

Spotify tokens expire. Implement refresh logic:

```typescript
const refreshAccessToken = async (refreshToken: string) => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: CLIENT_ID,
    }),
  });
  const data = await response.json();
  localStorage.setItem("spotify_access_token", data.access_token);
  return data.access_token;
};
```

---

## Complete Integration Checklist

- [ ] Create Spotify App on Developer Dashboard
- [ ] Add Client ID and Redirect URI to `.env`
- [ ] Install `spotify-web-api-js`
- [ ] Create `spotifyAuth.ts` service
- [ ] Create Spotify callback page
- [ ] Add callback route to App.tsx
- [ ] Implement `handlePlayClick` with real API call
- [ ] Get real Spotify track URIs and update data
- [ ] Test login and playback flow
- [ ] Implement token refresh logic
- [ ] Handle errors gracefully

---

## Testing Locally

1. Start dev server: `npm run dev`
2. Click login button → Redirects to Spotify login
3. Authorize app → Redirected to callback
4. Token stored in localStorage
5. Click "Play on Spotify" on a release card
6. Track should play on your Spotify device

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| "Redirect URI mismatch" | Ensure `VITE_SPOTIFY_REDIRECT_URI` matches Dashboard setting |
| Token expired errors | Implement refresh token logic (Step 9) |
| No playback on devices | Ensure Spotify app is open on a device or use Web Playback SDK |
| CORS errors | Use Spotify Web API directly (no CORS issues) |
| Track not found | Verify Spotify URI format: `spotify:track:xxxxx` |

---

## Resources

- [Spotify Web API Docs](https://developer.spotify.com/documentation/web-api)
- [Spotify Authorization Docs](https://developer.spotify.com/documentation/general/guides/authorization/)
- [Spotify Track Search Docs](https://developer.spotify.com/documentation/web-api/reference/search)

---

## Next Steps

Once integrated, you can add:
- User authentication for saving favorites
- Playlist creation from featured releases
- Real-time playback status updates
- Smooth transitions between tracks
- Analytics on most-played releases
