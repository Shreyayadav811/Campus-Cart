const express = require('express');
const multer = require('multer');
const path = require('path');
const Item = require('../models/itemModel'); // Adjust path if necessary

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// POST route to create a new item
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { title, description, price, contactNumber } = req.body;
        const newItem = new Item({
            title,
            description,
            price,
            contactNumber,
            image: req.file ? req.file.filename : null
        });

        await newItem.save();
        res.status(201).json({ message: 'Item posted successfully', item: newItem });
    } catch (error) {
        console.error('Error creating item:', error);
        res.status(500).json({ error: 'Failed to create item' });
    }
});

// GET route to fetch all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ error: 'Failed to fetch items' });
    }
});

module.exports = router; // Export the router



