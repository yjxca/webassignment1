// src/app/Interactive2.js

'use client';

import { useState } from 'react';

export default function Interactive2() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission, e.g., send the data to a server
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <h2>Interactive Component 2</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {name && <p>Hello, {name}!</p>}
    </div>
  );
}