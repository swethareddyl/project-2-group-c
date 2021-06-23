const router = require('express').Router();
const { Weapon, Armor, User } = require('../models');
const sequelize = require('sequelize');
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {
    const weaponData = await Weapon.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'mainEffect',
            'majorEffect',
            'minorEffect',
            'itemType',
            'capsValue',
            'user_id'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ],
        order: [
            ['mainEffect', 'ASC']
        ]
    })

    const armorData = await Armor.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'mainEffect',
            'majorEffect',
            'minorEffect',
            'itemType',
            'capsValue',
            'user_id'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ],
        order: [
            ['mainEffect', 'ASC']
        ]
    })

    const weapons = weaponData.map(weapon => weapon.get({ plain: true }));
    const armor = armorData.map(armor => armor.get({ plain:true }));
    res.render('inventory', { weapons, armor, loggedIn: true, user_id: req.session.user_id})

})

module.exports = router;