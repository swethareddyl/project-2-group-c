const router = require('express').Router();
const { Weapon } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Weapon.findAll({})
    .then(weaponData => res.json(weaponData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    Weapon.create({
        mainEffect: req.body.mainEffect,
        majorEffect: req.body.majorEffect,
        minorEffect: req.body.minorEffect,
        itemType: req.body.itemType,
        capsValue: req.body.capsValue,
        user_id: req.session.user_id
    })
    .then(weaponData => res.json(weaponData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Weapon.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(weaponData => {
        if(!weaponData) {
            res.status(404).json({ message: 'No weapon found with this id' });
            return;
        }
        res.json(weaponData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;