const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let bookingSchema = new Schema({

    name: {
        type: String,
        required: [true, 'name necessary']
    },
    email: {
        type: String,
        required: [true, 'email necessary']
    },
    origin: {
        type: String,
        required: [true, 'origin necessary']
    },
    destination: {
        type: String,
        required: [true, 'destination necessary']
    },
    departure: {
        type: Date,
        required: [true, 'departure necessary']
    },
    duration: {
        type: Number,
        required: [true, 'duration necessary']
    },


});



bookingModel=mongoose.model('booking', bookingSchema);



module.exports = bookingModel;