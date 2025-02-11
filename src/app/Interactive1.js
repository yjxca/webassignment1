// src/app/Interactive1.js

'use client';

import { useState } from 'react';

export default function Interactive1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Interactive Component 1</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}