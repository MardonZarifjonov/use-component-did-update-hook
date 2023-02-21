import { useState } from 'react';
import { useComponentDidUpdate } from './useComponenDidUpdate';

export default function App() {
  const [counter, setCounter] = useState(0);

  useComponentDidUpdate(() => console.log('Component updated'));

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Increment
      </button>
    </div>
  );
}
