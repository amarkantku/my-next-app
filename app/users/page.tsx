import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div
      style={{
        border: '2px solid cyan',
        padding: '20px',
        margin: '10px',
      }}
    >
      <div>I am user page</div>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
