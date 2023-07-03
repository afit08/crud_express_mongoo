const express = require('express');
const router = express.Router();

const AuhthorController = require("../controllers/AuthorController");

router.get('/', AuhthorController.index);
router.get('/:id', AuhthorController.show);
router.post('/store', AuhthorController.store);
// router.post('/storeBook/:id', AuhthorController.storeBook);

module.exports = router