const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/EmployeeController');
const UploadFile = require('../minddleware/upload');

router.get('/', EmployeeController.index);
router.get('/:id', EmployeeController.show);
router.post('/store', EmployeeController.store);
router.post('/update/:id', EmployeeController.update);
router.delete('/delete/:id', EmployeeController.destroy);
router.post('/store_file', UploadFile.single('avatar'), EmployeeController.store_file);
router.post('/store_file_multi', UploadFile.array('avatar[]'), EmployeeController.store_file_multi);

module.exports = router