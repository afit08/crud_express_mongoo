const Book = require('../models/Book');
const Author = require('../models/Author');

const findAll = async (req, res) => {
    try {
        const result = await Book.find().populate('authors');
        
        return res.status(200).json({
            message: "Show all books",
            data: result
        })
    } catch (error) {
        return res.status(404).json({ message: error.message });        
    }
}

const storeBook = async (req, res) => {
    let authorID = req.params.id;
    const results = await Author.findById(authorID).populate('books');

    console.log(results._id);
    let book = new Book({
      title: req.body.title,
      subtitle: req.body.subtitle,
      author: results._id
    });
  
    try {
      const result = await book.save();
      results.books.push(book);
      await results.save();
  
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  };

  module.exports = {
    storeBook,
    findAll
  }