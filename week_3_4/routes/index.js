const router = require('express').Router();
router.use('/', require('./swagger'));

// router.get('/', (req, res) => {res.send ('Hello World');});

router.get('/', (req, res) => {
    // #swagger.tags=['Hello World']
    res.send ('Hello World');
});

router.use('/students', require('./students'));

module.exports = router;