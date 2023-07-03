const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4,
      },
    name: {
        type: String,
        required: '{PATH} is required!'
    },
    bio: {
        type: String
    },
    books: [
        { type: mongoose.Schema.Types.String,ref: 'Book'}
    ]
},{
    timestamps: true
});

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;