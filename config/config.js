const dotenv = require('dotenv').config()

// =========================
//          PORT
// =========================

const port = 3000;

// =========================
//        DATABASE
// =========================

const dbUrl = process.env.DBURL;


module.exports = {
    port,
    dbUrl
};