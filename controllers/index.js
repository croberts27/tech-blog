const router = require('express').Router();
const apiRoutes = require('./api/api-index');

router.use('/api', apiRoutes);

module.exports = router;
