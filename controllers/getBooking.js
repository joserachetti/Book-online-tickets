const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

router.get('/booking/:id', async (req, res) => {


    let bookingId = req.params.id;

    try {

        let search = await Booking.findById(bookingId);

        search ? res.status(200).json({
            result: search,
        }) : res.status(404).json({
            message: 'Not Found',
        });

    } catch (error) {
        console.error(error);
        return res.status(500).send('serverError');
    }



});



module.exports = router;