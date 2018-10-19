const express = require('express');
const router = express.Router();

// Require the controller
const cupon_controller = require('../controllers/cupon.controller');

router.get('/:code', cupon_controller.cupon_details);
router.put('/:code', cupon_controller.cupon_update);

module.exports = router;