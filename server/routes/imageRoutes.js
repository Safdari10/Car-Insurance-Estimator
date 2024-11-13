const express = require('express')
const multer = require('multer')
const { analyzeImage } = require('../controller/customVisionController.js')


const router = express.Router()
const upload = multer({ storrage: multer.memoryStorage() });

router.post('/analyze', upload.single('image'), analyzeImage)

module.exports = router;