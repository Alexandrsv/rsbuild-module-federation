import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="content">
      <h1>Rsbuild with React!</h1>
      <p>Start building amazing things with Rsbuild!</p>

      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default App;
