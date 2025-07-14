
import React from 'react';

const products = [
  { title: "Air Fryer", price: "$39.99", reviews: 145, score: 80 },
  { title: "Dog Brush", price: "$14.95", reviews: 157, score: 75 },
  { title: "Throw Blanket", price: "$29.99", reviews: 82, score: 88 },
  { title: "Organic Matcha", price: "$24.99", reviews: 78, score: 91 }
];

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>🧠 Black Diamond – Product Finder</h1>
      <div style={{ marginTop: '2rem' }}>
        {products.map((product, i) => (
          <div key={i} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
            <h2>{product.title}</h2>
            <p>💰 Price: {product.price}</p>
            <p>⭐ Reviews: {product.reviews}</p>
            <p>🔥 Opportunity Score: {product.score}/100</p>
          </div>
        ))}
      </div>
    </div>
  );
}
