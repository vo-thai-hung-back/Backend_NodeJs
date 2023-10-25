const express = require('express');
const router = express.Router();
const { getHomepage, getImg, postCreateUser, getCreatePage } = require('../controllers/homeController')

router.get('/', getHomepage);

router.get('/ABC', getImg);

router.get('/create', getCreatePage);

router.post('/create-new', postCreateUser);

module.exports = router;