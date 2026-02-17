const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  email: { type: String, required: true },
  role: { type: String, required: true },
  module: { type: String, required: true },
  score: { type: Number, default: 0 },
  watchTime: { type: Number, default: 0 }, // in seconds or minutes
  verdict: { type: String, enum: ["Eligible", "Not Eligible"], default: "Not Eligible" },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Progress", progressSchema);