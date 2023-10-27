const express = require('express');
const router = express.Router();
const { getHomepage, getImg, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser } = require('../controllers/homeController')

router.get('/', getHomepage);

router.get('/ABC', getImg);

router.get('/create', getCreatePage);

router.get('/update/:id', getUpdatePage);


router.post('/create-new', postCreateUser);

router.post('/update-user', postUpdateUser);

module.exports = router;