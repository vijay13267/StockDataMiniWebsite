// src/services/saveMarketData.js
const MarketData = require('../models/MarketData');

const saveMarketData = async (data) => {
  try {
    await MarketData.insertMany(data);
  } catch (error) {
    console.error('Error saving market data:', error);
  }
};

module.exports = saveMarketData;
