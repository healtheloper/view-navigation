import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>hello {count}</div>
    </div>
  );
}

export default App;
