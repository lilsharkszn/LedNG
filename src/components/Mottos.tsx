import type { FC } from 'react';
import { useEffect, useState } from "react";
import '../components/Mottos.css'

const MottoLists = [
"Your Sound, Our Strategy",
"Built for Artists. Powered by Strategy",
"Discover how far your music can go when the right strategy meets the right stage",
"Explore the world of opportunity your sound deserves",
"Let your sound explore the world while we build the path forward",
"Unlock new opportunities and elevate your music to the next level",
"Discover the power of strategic promotion done right",
]

const SECONDS = 8000;

const Mottos: FC = () => {
    const [currentMottoIndex, setCurrentMottoIndex] = useState(0);
    useEffect(() => {
        if (MottoLists.length <= 1) 
            return;  // No mottos to display
        const Interval = setInterval(() => {
            setCurrentMottoIndex(prevIndex => (prevIndex + 1) % MottoLists.length);
        }, SECONDS);
            return () => clearInterval(Interval);
    }, []);

    return <h4>{MottoLists[currentMottoIndex]}</h4>;
}

export default Mottos;