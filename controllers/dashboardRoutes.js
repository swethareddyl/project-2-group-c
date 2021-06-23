const router = require('express').Router()
const { Weapon, Armor, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    res.render('dashboard', {
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id
    })
})

router.get('/add-weapon', withAuth, (req, res) => {
    res.render('add-weapon', {
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id
    })
})

router.get('/add-armor', withAuth, (req, res) => {
    res.render('add-armor', {
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id
    })
})

module.exports = router;