// src/app/Navigation.js
    
'use client';
    
import Link from 'next/link'; // Make sure this import is correct

export default function Navigation() {
  return (
    <nav>
      <ul>
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