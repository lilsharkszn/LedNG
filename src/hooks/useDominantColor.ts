import { useState, useEffect } from "react";

interface RGB {
  r: number;
  g: number;
  b: number;
}

/**
 * Custom hook to extract the dominant color from an image URL
 * Uses Canvas API to analyze image pixels
 */
export const useDominantColor = (imageUrl?: string): string => {
  const [dominantColor, setDominantColor] = useState<string>("rgb(16, 185, 129)"); // Default green

  useEffect(() => {
    if (!imageUrl) {
      setDominantColor("rgb(16, 185, 129)");
      return;
    }

    const extractColor = async () => {
      try {
        const img = new Image();
        img.crossOrigin = "anonymous";

        img.onload = () => {
          // Create canvas and get image data
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          if (!ctx) return;

          // Resize canvas to 1x1 to get average color (fast method)
          canvas.width = 150;
          canvas.height = 150;

          ctx.drawImage(img, 0, 0, 150, 150);

          // Get pixel data
          const imageData = ctx.getImageData(0, 0, 150, 150);
          const data = imageData.data;

          // Calculate average color
          let r = 0,
            g = 0,
            b = 0;
          const pixelCount = data.length / 4;

          for (let i = 0; i < data.length; i += 4) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
          }

          r = Math.round(r / pixelCount);
          g = Math.round(g / pixelCount);
          b = Math.round(b / pixelCount);

          // Convert to brighter, more saturated version
          const brightenedColor = brightenColor({ r, g, b });
          setDominantColor(`rgb(${brightenedColor.r}, ${brightenedColor.g}, ${brightenedColor.b})`);
        };

        img.onerror = () => {
          setDominantColor("rgb(16, 185, 129)");
        };

        img.src = imageUrl;
      } catch (error) {
        console.warn("Error extracting dominant color:", error);
        setDominantColor("rgb(16, 185, 129)");
      }
    };

    extractColor();
  }, [imageUrl]);

  return dominantColor;
};

/**
 * Brighten and saturate a color to make it more vivid for UI use
 */
const brightenColor = (color: RGB): RGB => {
  // Convert to HSL for better manipulation
  const rgb = [color.r / 255, color.g / 255, color.b / 255];
  const max = Math.max(...rgb);
  const min = Math.min(...rgb);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case rgb[0]:
        h = (rgb[1] - rgb[2]) / d + (rgb[1] < rgb[2] ? 6 : 0);
        break;
      case rgb[1]:
        h = (rgb[2] - rgb[0]) / d + 2;
        break;
      case rgb[2]:
        h = (rgb[0] - rgb[1]) / d + 4;
        break;
    }
    h /= 6;
  }

  // Brighten and saturate
  l = Math.min(l * 1.2, 0.7); // Brighten but not too much
  s = Math.min(s * 1.3, 1); // Increase saturation

  // Convert back to RGB
  let r: number, g: number, b: number;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
};
