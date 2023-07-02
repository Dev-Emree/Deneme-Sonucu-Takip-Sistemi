let router = require("express").Router(),
    userRouter = require("./user.router"),
    panelRouter = require("./panel.router"),
    examRouter = require("./exam.router"),
    detailRouter = require("./detail.router");

router.use('/', userRouter);
router.use('/set', examRouter);
router.use('/detay', detailRouter);
router.use('/panel', panelRouter);

router.get('/', (req, res) => res.redirect('/giris'));

router.get('/404', (req, res) => {
    res.status(404).sendfile('views/404.html'); 
});

router.use('*', (req, res) => {
    res.redirect('/404')
});

module.exports = router;