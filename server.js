// Application backend architecture reference: https://www.bezkoder.com/node-js-mongodb-auth-jwt/

"use strict";

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const ejs = require("ejs");
const path = require("path");

dotenv.config();
const app = express();

var corsOptions = {
    origin: "http://localhost:5001"
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/public",express.static('public'));

app.set('view engine', 'ejs');

const db = require("./app/models")

db.mongoose
    .connect("mongodb+srv://scottedkreider:MongoAdmin1234@cluster0.xfkqs.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Successfully connected to MongoDB");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });



// Weekly Task List route
app.get('/weeklyTaskList',(req, res) => {
    console.log('weeklyTaskList');
    res.render(path.join("pages/weeklyTaskList"));
})

// MultiMonthCalendar route
app.get('/multiMonthCalendar',(req, res) => {
    console.log('multiMonthCalendar');
    // res.json({message: "Welcome!"});
    res.render(path.join("pages/multiMonthCalendar"));
})


// Root route
app.get('/',(req, res) => {
    console.log('index');
    res.render(path.join("pages/index"));
})

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/multiMonthCalendar.routes')(app);
require('./app/routes/weeklyTaskList.routes')(app);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is live on port 5000");
})