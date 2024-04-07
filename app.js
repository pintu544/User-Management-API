const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/user");
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000; // Vercel will assign a port

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://pksharmagh4:0PggKBGRsE9uJfBz@cluster0.ffqsax5.mongodb.net/?retryWrites=true&w=majority" ||process.env.DATABASE_URL
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
