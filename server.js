"use strict";

// Load node modules
import express from 'express';
import ejs from 'ejs';
import path from 'path';
import bodyParser from 'body-parser';

import { processDataForDatabase, retrieveDataToSend}
    from "./backend/processing/dataForwarding.js"

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
app.use(bodyParser.json());
app.set('view engine', 'ejs');

// Set the port
var port_number = process.env.PORT || 5000;

// Listen
app.listen(port_number,() => {
    console.log(`Listening on port ${port_number}`);
});

// Root route
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,'/public/html/index.html'));
})



app.post('/test',(req,res) => {
    console.log("trying to add");
    processDataForDatabase(req.body);
});

app.get('/retrieve',(req,res) => {
    console.log("trying to retrieve");
    res.send(JSON.stringify(retrieveDataToSend()));
})