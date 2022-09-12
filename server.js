"use strict";

// Load node modules
import express from 'express';
import ejs from 'ejs';
import path from 'path';
import bodyParser from 'body-parser';

// Set default file path
// https://stackoverflow.com/questions/8817423/why-is-dirname-not-defined-in-node-repl
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize express
var app = express();

// Point to static starting path point
app.use("/public",express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.set('view engine', 'ejs');

// Set the port
var port_number = process.env.PORT || 5000;


// Root route
app.get('/',(req, res) => {
    res.render(path.join("pages/login.ejs"));
})

// Listen
app.listen(port_number,() => {
    console.log(`Listening on port ${port_number}`);
});
