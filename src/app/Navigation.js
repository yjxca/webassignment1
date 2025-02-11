// src/app/Navigation.js

// The "use client" directive ensures this file is rendered on the client side.
// In Next.js (App Router), server components are the default, so for interactive
// components, we need "use client".
'use client';

import Link from 'next/link'; 

export default function Navigation() {
  return (
    <nav>
      <ul>
        {/* Each list item uses Next.js's built-in Link component for client-side routing */}
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/interactive1">Interactive Component 1</Link>
        </li>
        <li>
          <Link href="/interactive2">Interactive Component 2</Link>
        </li>
      </ul>
    </nav>
  );
}
