const router = require('express').Router();

const userRoutes = require('./userRoutes');
const armorRoutes = require('./armorRoutes');
const weaponRoutes = require('./weaponRoutes');
const contactRoutes = require('./contactRoutes')

router.use('/users', userRoutes);
router.use('/armor', armorRoutes);
router.use('/weapons', weaponRoutes);
router.use('/contact', contactRoutes);

module.exports = router;