const mongoose = require('mongoose');

// Define the Item schema
const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    contactNumber: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String, // Filename of the uploaded image
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically sets the creation date
    }
});

// Create the Item model
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
