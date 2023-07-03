const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4,
      },
    title: {
        type: String,
        required: '{PATH} is required!'
    },
    subtitle: {
        type: String
    },
    author: { 
        type: mongoose.Schema.Types.String,
        ref: 'Author'
    }
},{
    timestamps: true
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;