// components/Timer.js
import { useEffect, useState } from 'react';

export default function Timer({ initialMinutes = 4 }) {
  const [seconds, setSeconds] = useState(initialMinutes * 60);
  const [isExpired, setIsExpired] = useState(false); // Track if timer has expired

  useEffect(() => {
    if (isExpired) return; // Stop the countdown if the timer has expired

    const countdown = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          setIsExpired(true); // Mark timer as expired
          clearInterval(countdown);
          return 0; // Ensure seconds reach 0 before displaying 88:88
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown); // Cleanup interval on component unmount
  }, [isExpired]);

  const formatTime = (secs) => {
    if (isExpired) {
      return `88:88`; // Display 88:88 if the timer has expired
    }
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return <div style={{ fontSize: '1.5rem', color: '#FFF4B7' }}>{formatTime(seconds)}</div>;
}
