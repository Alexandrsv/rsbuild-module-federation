import { useState } from 'react';
import './App.css';
import ProviderButton from 'federation_provider/button';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="content">
      <h1>Rsbuild with React {count}</h1>
      <ProviderButton onClick={() => setCount(count + 1)} />
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
