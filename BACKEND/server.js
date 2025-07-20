const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads'))); // Serve uploaded images


// MongoDB connection
mongoose.connect('mongodb://localhost:27017/collegeMarketplace') 
const db = mongoose.connection
db.once('open', ()=>{
    console.log("mongodb connection successful")
})

// Routes
const itemRoutes = require('./routes/itemRoutes');
app.use('/api/items', itemRoutes); // Item-related API routes

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
