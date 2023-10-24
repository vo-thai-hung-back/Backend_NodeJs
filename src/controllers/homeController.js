const getHomepage = (req, res) => {
    res.render('sample.ejs')
}
const getImg = (req, res) => {
    res.send('sample.ejs')
}

module.exports = {
    getHomepage,
    getImg
}