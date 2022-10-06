const db = require("../models")

db.mongoose
    .connect("mongodb+srv://scottedkreider:MongoAdmin1234@cluster0.xfkqs.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Successfully connected to MongoDB");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });