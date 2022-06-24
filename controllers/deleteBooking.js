const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

router.delete('/delete_booking', async (req, res) => {

    let body = req.body;
    let id = body.id;

    try {

        let result = await Booking.findByIdAndDelete(id);

        if (result) {

            return res.status(200).json({
                message: 'Booking Deleted',
            });

        } else {

            return res.status(404).json({
                message: 'Not Found',
            });

        }

    } catch (error) {

        console.error(error);
        return res.status(500).send('serverError');

    }



});



module.exports = router;