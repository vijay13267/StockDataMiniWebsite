// src/components/StockModal.js
'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockModal = ({ isOpen, onClose, onStockChange }) => {
  const [stock, setStock] = useState('');
  const [coinList, setCoinList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoinList = async () => {
      try {
        const response = await axios.post('https://api.livecoinwatch.com/coins/list', 
          {
            currency: 'USD',
            sort: 'rank',
            order: 'ascending',
            offset: 0,
            limit: 100, // Adjust the limit as needed
            meta: false
          },
          {
            headers: {
              'content-type': 'application/json',
              'x-api-key': '4594e493-d682-4c33-9b67-a9fe52dd813e' // Replace with your actual API key
            }
          }
        );
        console.log(response)
        setCoinList(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch coin list');
        setLoading(false);
      }
    };

    fetchCoinList();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onStockChange(stock);
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        width: '400px',
        maxWidth: '100%',
        position: 'relative'
      }}>
        <button
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            color: '#333',
            cursor: 'pointer'
          }}
          onClick={onClose}
        >
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Select Stock/Crypto:
            <select
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                marginTop: '5px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            >
              <option value="" disabled>Select a coin</option>
              {loading && <option>Loading...</option>}
              {error && <option>Error fetching data</option>}
              {coinList?.map((coin) => (
                <option key={coin.code} value={coin.code}>
                  {coin.name} ({coin.code})
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            style={{
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Change Stock
          </button>
        </form>
      </div>
    </div>
  );
};

export default StockModal;
