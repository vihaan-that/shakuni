
// components/ContinuousRequest.js
import { useEffect, useState } from 'react';

export default function ContinuousRequest() {
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/verifyShloka', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        const result = await response.text();
        setResponseMessage(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setResponseMessage("Error: Couldn't fetch the response.");
      }
    };

    // Send request every 10 seconds
    fetchData(); // Initial fetch
    const intervalId = setInterval(fetchData, 10000); // Fetch every 10 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return <div className="glowingTextRight">{responseMessage}</div>;
}
