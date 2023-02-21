const mongoose = require('mongoose')

const oysterSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name.'],
            unique: true,
        },
        location: {
            type: String,
            required: [true, 'Please add a location.']
        },
        size: {
            type: String,
            required: [true, 'Please add a size.']
        },
        description: {
            type: String,
            required: [true, 'Please add a description.']
        },
        price: {
            type: String,
            required: [true, 'Please add a price.']
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Oyster', oysterSchema)