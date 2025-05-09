import React, { useEffect } from 'react';

const PureComponent = React.memo(function PureComponent({ weekday }) {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`Today is ${weekday}`);
    }, 2000);

    return () => clearInterval(interval);
  }, [weekday]);

  return (
    <div>
      <h2>Today is {weekday}</h2>
    </div>
  );
});

export default PureComponent;
