const express = require("express");
const router = express.Router();
const User = require("../models/user");

// 1. Create User Data
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 2. Get Random User
router.get("/random", async (req, res) => {
  try {
    const count = await User.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomUser = await User.findOne().skip(randomIndex);
    res.json(randomUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 3. Check User Existence
router.post("/exists", async (req, res) => {
  try {
    const userExists = await User.exists({ name: req.body.name });
    res.json(userExists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 4. Users Above Age
router.get("/above-age", async (req, res) => {
  try {
    const users = await User.find({ age: { $gte: req.query.age } });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//user name
router.get("/names", async (req, res) => {
  try {
    const users = await User.find({}, { name: 1, _id: 0 }); // Select only 'name'
    const names = users.map((user) => user.name);
    res.json(names);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
