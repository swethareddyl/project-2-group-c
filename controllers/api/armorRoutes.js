const router = require('express').Router();
const { Armor } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Armor.findAll({})
    .then(armorData => res.json(armorData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    Armor.create({
        mainEffect: req.body.mainEffect,
        majorEffect: req.body.majorEffect,
        minorEffect: req.body.minorEffect,
        itemType: req.body.itemType,
        capsValue: req.body.capsValue,
        user_id: req.session.user_id
    })
    .then(armorData => res.json(armorData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Armor.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(armorData => {
        if(!armorData) {
            res.status(404).json({ message: 'No armor found with this id' });
            return;
        }
        res.json(armorData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;