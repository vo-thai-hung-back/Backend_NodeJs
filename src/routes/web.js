const express = require('express');
const router = express.Router();
const { getHomepage, getImg, postCreateUser } = require('../controllers/homeController')

router.get('/', getHomepage);

router.get('/ABC', getImg);

router.post('/create-new', postCreateUser);

module.exports = router;