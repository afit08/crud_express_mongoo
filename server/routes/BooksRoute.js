const express = require('express');
const router = express.Router();

const BookController = require("../controllers/BookController");

router.get("/", BookController.findAll);
router.post('/storeBook/:id', BookController.storeBook);

module.exports = router