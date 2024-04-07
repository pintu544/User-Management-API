// models/user.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  DOB: { type: Date, required: true },
  age: { type: Number, required: true },
  location: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
