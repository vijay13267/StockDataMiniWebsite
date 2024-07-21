// src/models/MarketData.js
const mongoose = require('mongoose');

const MarketDataSchema = new mongoose.Schema({
  symbol: String,
  timestamp: { type: Date, default: Date.now },
  price: Number,
});

const MarketData = mongoose.models.MarketData || mongoose.model('MarketData', MarketDataSchema);

module.exports = MarketData;
