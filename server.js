// Application backend architecture reference: https://www.bezkoder.com/node-js-mongodb-auth-jwt/

"use strict";

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const ejs = require("ejs");
const path = require("path");

dotenv.config();
const app = express();

// var corsOptions = {
//     origin: "http://localhost:5001"
// }
// app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/public",express.static('public'));

app.set('view engine', 'ejs');


const config = require("./app/config/db.config");

// routes
require('./app/routes/page.routes')(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/multiMonthCalendar.routes')(app);
require('./app/routes/weeklyTaskList.routes')(app);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is live on port 5000");
})
