// src/app/Interactive2.js

// "use client" indicates that this component is rendered on the client side
// in Next.js and can use features like hooks and browser APIs.
'use client';

import { useState } from 'react';

export default function Interactive2() {
  // useState hook to manage the 'name' variable.
  // The initial value is an empty string.
  const [name, setName] = useState('');

  // Called when the form is submitted.
  // Prevents the default browser action and shows an alert with the entered name.
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add functionality to send 'name' to a server or process it further.
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <h2>Interactive Component 2</h2>
      {/* A simple form that calls handleSubmit on submission */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          {/* Input field controlled by the 'name' state */}
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* Conditionally display a greeting if 'name' is not empty */}
      {name && <p>Hello, {name}!</p>}
    </div>
  );
}
