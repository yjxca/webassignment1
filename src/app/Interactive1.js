// src/app/Interactive1.js

// The "use client" directive ensures this component is rendered
// on the client side in Next.js (rather than as a server component).
'use client';

import { useState } from 'react';

export default function Interactive1() {
  // useState is a React hook that allows you to add state to a function component.
  // Here, 'count' is initialized to 0, and 'setCount' is the function used to update the state.
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Interactive Component 1</h2>
      {/* Display the current count value */}
      <p>Count: {count}</p>

      {/* Clicking either button calls setCount to update the state */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
