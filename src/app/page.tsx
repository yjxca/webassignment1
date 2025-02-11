// src/app/page.tsx
'use client';

import HomePage from './HomePage';
import Navigation from './Navigation';

export default function Home() {
  return (
    <main>
      <Navigation />
      <HomePage /> 
    </main>
  );
}