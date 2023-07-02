let router = require("express").Router(),
    { publicExam } = require("../controllers/examPublic");

router.get('/:exam/:id', async (req, res) => {
    var data = await publicExam(req.params.exam, req.params.id);
    if (data == false) {
        return res.redirect('/404');
    }

    data.exam = req.params.exam;
    data.auth = (typeof req.session.passport) == undefined;
    data.page = 'details';
    res.render('details.ejs',data);
});

module.exports = router;