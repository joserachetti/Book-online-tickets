const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

router.post('/create_booking', async (req, res) => {


  let body = req.body;

  let name = body.name;
  let email = body.email;
  let origin = body.origin;
  let destination = body.destination;
  let departure = body.departure;
  let duration = body.duration;


  let booking = new Booking({

    name: name,
    email: email,
    origin: origin,
    destination: destination,
    departure: departure,
    duration: duration,

  });

  try {

    let save = await booking.save();

    if (save) res.status(200).json({ result: save});

  } catch (error) {
    console.error(error);
    return res.status(500).send('serverError');
  }


});


module.exports = router;