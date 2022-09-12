"use strict";

import mongodb from 'mongodb';

export function addDataToDatabase(dataToAdd){
    let db, dates
    const uri = "mongodb+srv://scottedkreider:admin1234@cluster0.xfkqs.mongodb.net/?retryWrites=true&w=majority"
    const mongo = mongodb.MongoClient;
    mongo.connect(uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },(error,client) => {
            if(error){
                console.error(err);
                return;
            }
            db=client.db("multiMonthCalendar")
            dates = db.collection("dates")
            dates.insertOne(dataToAdd)
        }
    );

    console.log("after insertion");
}