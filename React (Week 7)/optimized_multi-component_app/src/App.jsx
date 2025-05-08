import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import useDate from './custom_hook.jsx';
import Name from './display.jsx';
import Day from './pure_component.jsx';

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("Tayyab");
  const [company, setCompany] = useState("Devsloop");
  const [day, setDay] = useState("Wednesday");
  const currentDate = useDate();

  function counter() {
    setCount(prev => prev + 1);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      window.open("https://www.google.com", "_blank");
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <h3>Count is {count}</h3>
        <button onClick={counter}>Count</button>

        <p>Custom hook says: {currentDate}</p>

        <Name name={user} organization={company} />

        <Day weekday={day} />
        <button onClick={() => setDay(prev => prev === "Wednesday" ? "Thursday" : "Friday")}>
          Change Day
        </button>
      </header>
    </div>
  );
}

export default App;
