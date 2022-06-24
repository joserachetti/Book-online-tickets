const {
    port,
    dbUrl
} = require('./config/config');
const routes = require('./routes');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));
app.use('/', routes);

try {
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log('Database Connected');


} catch (error) {
    console.error(error)
}


app.listen(port, (error) => {

    error => console.error(error)

    console.log(`Server on port ${ port }`);

});