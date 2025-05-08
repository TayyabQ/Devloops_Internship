import React, { useEffect } from 'react';

// React.memo ensures this component only re-renders when props change
const PureComponent = React.memo(function PureComponent({ weekday }) {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`Today is ${weekday}`);
    }, 2000);

    return () => clearInterval(interval);
  }, [weekday]); // will re-run when 'weekday' changes

  return (
    <div>
      <h2>Today is {weekday}</h2>
    </div>
  );
});

export default PureComponent;
