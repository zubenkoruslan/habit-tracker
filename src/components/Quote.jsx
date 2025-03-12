import React from 'react';

const quotes = [
  { text: 'The secret of getting ahead is getting started.', author: 'Mark Twain' },
  { text: 'You don’t have to be great to start, but you have to start to be great.', author: 'Zig Ziglar' },
  { text: 'Small daily improvements lead to stunning results.', author: 'Robin Sharma' },
];

export default function Quote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md text-center animate-fade-in">
      <p className="text-lg italic text-gray-200">"{quote.text}"</p>
      <p className="text-sm text-gray-400 mt-2">— {quote.author}</p>
    </div>
  );
}