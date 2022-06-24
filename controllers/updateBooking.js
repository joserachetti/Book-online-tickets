const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

router.put('/update_booking', async (req, res) => {

    let body = req.body;

    let id = body.id;
    let name = body.name;
    let email = body.email;
    let origin = body.origin;
    let destination = body.destination;
    let departure = body.departure;
    let duration = body.duration;


    try {

        let update = await Booking.findByIdAndUpdate(id, {

            name: name,
            email: email,
            origin: origin,
            destination: destination,
            departure: departure,
            duration: duration,

        }, {
            new: true,
            omitUndefined: true
        }, );

        update ? res.status(200).json({
            result: update,
        }) : res.status(404).json({
            message: 'Not Found',
        });


    } catch (error) {
        console.error(error);
        return res.status(500).send('serverError');
    }

});



module.exports = router;