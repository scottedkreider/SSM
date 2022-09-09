"use strict";

import { addDataToDatabase, retrieveDataFromDataBase }
    from '../data_access/mongoAccess.js';

export function processDataForDatabase(dataToAdd) {
    console.log("Processing addition...")
    addDataToDatabase(dataToAdd);
}

export function retrieveDataToSend(){
    console.log("Processing retrieval...")
    return retrieveDataFromDataBase();
}