const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({
  startLocation: String,
  endLocation: String,
  waypoints: [String],
  fuelConsumption: Number,
  travelTime: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Route', RouteSchema);