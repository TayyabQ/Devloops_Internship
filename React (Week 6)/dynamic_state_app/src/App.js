import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import useDate from './custom_hook.jsx'

function App() {

  const [count, setCount] = useState(0);
  const currentDate = useDate();

  function counter() {
    setCount(count + 1);
    return count;
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
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>Counter</h1>
        <h3>Count is {count}</h3>
        <button onClick={counter}>Count</button>
        <p>Custom hook says: {currentDate}</p>
      </header>
    </div>
  );
}

export default App;
