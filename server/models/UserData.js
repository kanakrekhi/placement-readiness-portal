const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String,
  module: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserData", userDataSchema);
