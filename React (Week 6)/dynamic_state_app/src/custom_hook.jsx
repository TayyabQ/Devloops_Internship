import { useState, useEffect } from 'react';

function useDate() {
  const [date, setDate] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return date;
}

export default useDate;