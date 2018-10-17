const express = require('express');
const router = express.Router();

// Require the controller
const cupon_controller = require('../controllers/cupon.controller');

router.post('/', cupon_controller.cupon_create);
router.get('/:code', cupon_controller.cupon_details);
router.put('/:code', cupon_controller.cupon_update);
router.delete('/:code', cupon_controller.cupon_delete);

module.exports = router;