
// components/Timer.js
import { useEffect, useState } from 'react';

export default function Timer({ initialMinutes = 4 }) {
  const [seconds, setSeconds] = useState(initialMinutes * 60);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return <div style={{ fontSize: '1.5rem', color: '#FFF4B7' }}>{formatTime(seconds)}</div>;
}
