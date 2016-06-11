var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/:sameTitle?', function (req, res, next) {
    res.render('node', {title: req.params.sameTitle ? req.params.sameTitle : 'Default title'});
});


router.get('/user/email', function (req, res, next) {
    User.findOne({}, function (err, doc) {
        if (err) {
            return res.send('Error');
        }
        var email = doc ? doc.email : '';
        res.render('node', {email: email});
    });

});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Imax',
        lastName: 'BoBy',
        password: 'same-password',
        email: email
    });
    user.save();
    res.redirect('/');
});
module.exports = router;
