const asyncHandler = require('express-async-handler')

const Oyster = require('../models/oysterModel')

// @desc   Get oysters
// @route  GET /api/oysters
// @access Private
const getOysters = asyncHandler(async (req, res) => {
    const oysters = await Oyster.find({ })

    res.status(200).json(oysters);
})

// @desc   Set oyster
// @route  POST /api/oysters
// @access Private
const setOyster = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Please add data.')
    }

    const oyster = await Oyster.create({
        name: req.body.name,
        location: req.body.location,
        size: req.body.size,
        description: req.body.description,
        price: req.body.price,
    })

    res.status(200).json(oyster)
})

// @desc   Update oyster
// @route  PUT /api/oysters/:id
// @access Private
const updateOyster = asyncHandler(async (req, res) => {
    const oyster = await Oyster.findById(req.params.id)

    if(!oyster) {
        res.status(400)
        throw new Error('Oyster not found')
    }

    const updatedOyster = await Oyster.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedOyster)
})

// @desc   Delete oyster
// @route  DELETE /api/oysters/:id
// @access Private
const deleteOyster = asyncHandler(async (req, res) => {
    const oyster = await Oyster.findById(req.params.id)

    if(!oyster) {
        res.status(400)
        throw new Error('Oyster not found')
    }

    await oyster.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getOysters,
    setOyster,
    updateOyster,
    deleteOyster
}