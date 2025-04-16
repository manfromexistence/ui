import { useEffect, useRef, useState } from "react";

export const useActiveBeams = () => {
  const [activeBeams, setActiveBeams] = useState([]);
  const activeBeamsRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLine = Math.floor(Math.random() * 8);

      if (!activeBeamsRef.current.includes(randomLine)) {
        activeBeamsRef.current = [...activeBeamsRef.current, randomLine];
        setActiveBeams([...activeBeamsRef.current]);
        setTimeout(() => {
          activeBeamsRef.current = activeBeamsRef.current.filter(line => line !== randomLine);
          setActiveBeams([...activeBeamsRef.current]);
        }, 2000);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return activeBeams;
};