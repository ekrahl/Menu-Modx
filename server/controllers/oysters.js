import express from 'express';
import mongoose from 'mongoose';

import Oyster from '../models/Oyster.js';

const router = express.Router();

export const getOysters = async (req, res) => {
    try {
        const oysters = await Oyster.find();

        res.status(200).json(oysters)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const getOyster = async (req, res) => {
    const { id } = req.params;

    try {
        const oyster = await Oyster.findById(id);

        res.status(200).json(oyster)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createOyster = async (req, res) => {
    try {
        const { name, location, size, description, price } = req.body;
        const newOyster = new Oyster({ name, location, size, description, price });
        await newOyster.save();
        
        res.status(201).json(newOyster);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateOyster = async (req, res) => {
    const { id } = req.params;
    const { name, location, size, description, price } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No oyster with id: ${id}`);

    const updatedOyster = { name, location, size, description, price, _id: id };

    await Oyster.findByIdAndUpdate(id, updatedOyster, { new: true });

    res.json(updatedOyster);
};

export const deleteOyster = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No oyster with id: ${id}`);

    await Oyster.findByIdAndRemove(id);

    res.json({ message: "Oyster deleted successfully." })
}

export default router;