import React, { useState } from 'react';
import './App.css';
import Content1 from './components/Content1';
import Content2 from './components/Content2';

function App() {
  const [count, setCount] = useState(0);

  const onPlus = () => setCount(count + 1);

  const onMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    //setCount(count > 0 ? count - 1 : count);
  }

  return (
    <div className="App">
      <Content1 count={count}></Content1>
      <Content2 onPlus={onPlus} onMinus={onMinus}></Content2>
    </div>
  );
}

export default App;