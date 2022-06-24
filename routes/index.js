const express = require('express');
const router = express.Router();

router.use(require('../controllers/createBooking'));
router.use(require('../controllers/updateBooking'));
router.use(require('../controllers/getBooking'));
router.use(require('../controllers/deleteBooking'));


module.exports = router;