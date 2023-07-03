const Author = require('../models/Author');

const index = async (req, res) => {
    try {
        const result = await Author.find().populate('books');
        
        return res.status(200).json({
            message: "Show all author",
            data: result
        });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

const show = async (req, res) => {
    try {
        let authorID = req.params.id;
        const result = await Author.findById(authorID).populate('books');

        console.log(result._id);
        return res.status(200).json({
            message: "Show detail author",
            data: result
        });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

const store = async (req, res) => {
    let author = new Author({
      name: req.body.name,
      bio: req.body.bio,
    });
  
    try {
      const result = await author.save();
  
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  };



module.exports = {
    index,
    store,
    show,
}