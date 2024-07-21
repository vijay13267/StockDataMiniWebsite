// src/scripts/pollMarketData.js
const mongoose = require('mongoose');
const fetchMarketData = require('../services/fetchMarketData');
const saveMarketData = require('../services/saveMarketData');

const uri = 'mongodb://127.0.0.1:27017/marketdata'; // Update this with your connection string

const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

const pollData = async () => {
  const symbols = ['bitcoin', 'ethereum', 'ripple', 'dogecoin', 'cardano'];

  const marketData = await fetchMarketData(symbols);
  if (marketData) {
    const formattedData = Object.entries(marketData).map(([symbol, data]) => ({
      symbol,
      price: data.usd,
    }));
    await saveMarketData(formattedData);
  }
};

const startPolling = async () => {
  await connectToDatabase();

  setInterval(async () => {
    await pollData();
  }, 30000);
};

startPolling();
