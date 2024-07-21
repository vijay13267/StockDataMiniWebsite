// src/components/StockTable.js
'use client';

import React, { useState, useEffect } from 'react';

// Static data generator
const generateStaticData = (symbol) => Array.from({ length: 20 }, (_, i) => ({
  timestamp: new Date(Date.now() - i * 1000 * 60).toLocaleString(),
  price: (Math.random() * 1000).toFixed(2),
}));

const StockTable = ({ symbol }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Initialize static data on the client side
    setData(generateStaticData(symbol));
  }, [symbol]);

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f4f4f9',
      borderRadius: '8px',
      maxHeight: '500px', // Adjust height as needed
      overflowY: 'auto', // Enable vertical scroll
    }}>
      <h2 style={{ marginBottom: '15px' }}>Showing Data for: <span style={{ fontWeight: 'bold' }}>{symbol}</span></h2>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: '#fff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <thead>
          <tr style={{ backgroundColor: '#0070f3', color: '#fff' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Timestamp</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{entry.timestamp}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>${entry.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
