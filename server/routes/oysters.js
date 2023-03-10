const express = require('express');
const router = express.Router();
const Oyster = require('../models/oyster');

// Routes
router.get('/', (req, res) => {

    Oyster.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        })
});

router.post('/save', (req, res) => {
    console.log('Body: ', req.body)
    const data = req.body;

    const newOyster = new Oyster(data);

    // .save
    newOyster.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Internal server error' });
            return;
        }
        // Oyster
        return res.status(200).json({
            msg: 'We received your data'
        });

    });
});

module.exports = router;