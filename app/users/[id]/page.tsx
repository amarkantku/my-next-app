'use client';
import React from 'react';
import { useParams } from 'next/navigation';

export default function page() {
  const params = useParams();
  return (
    <div
      style={{
        border: '2px solid cyan',
        padding: '20px',
        margin: '10px',
      }}
    >
      <div>I am user page{params.id}</div>
    </div>
  );
}
