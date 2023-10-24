const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
})
router.get('/ABC', (req, res) => {
    res.send('sample.ejs')
})

router.get('/hung', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router;