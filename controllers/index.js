const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes')
const searchRoutes = require('./searchRoutes');
const inventoryRoutes = require('./inventoryRoutes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/search', searchRoutes);
router.use('/inventory', inventoryRoutes);

module.exports = router;