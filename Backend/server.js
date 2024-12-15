// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const productRoutes = require('./Routes/productRoutes');
app.use('/api/products', productRoutes);


// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1); // Exit the process if the database connection fails
  });

// Example API route
app.get('/', (req, res) => {
  res.send("API is working!");
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
