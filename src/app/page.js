// src/app/page.js
'use client';

import React, { useState } from 'react';
import StockTable from '../components/StockTable';
import StockModal from '../components/StockModal';

const Page = () => {
  const [symbol, setSymbol] = useState('AAPL');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStockChange = (newSymbol) => {
    setSymbol(newSymbol);
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2em', color: '#333' }}>Real-Time Stock Data</h1>
        <p style={{ fontSize: '1.2em', color: '#555' }}>View the latest data for your selected stock or crypto.</p>
      </header>
      <StockTable symbol={symbol} />
      <StockModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onStockChange={handleStockChange}
      />
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000
      }}>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1.2em',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          Change Stock
        </button>
      </div>
    </div>
  );
};

export default Page;
