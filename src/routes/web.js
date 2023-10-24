const express = require('express');
const router = express.Router();
const { getHomepage, getImg } = require('../controllers/homeController')

router.get('/', getHomepage);

router.get('/ABC', getImg)

module.exports = router;