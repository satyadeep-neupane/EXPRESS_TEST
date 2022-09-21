// let books = [
//     {
//         'id': 1,
//         'name': 'The Alchemist',
//     },
//     {
//         'id': 2,
//         'name': 'The Monk Who Sold His Ferrari',
//     }
// ]

// module.exports = books

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);