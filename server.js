const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

var corsOptions = {
    origin: "http://localhost:5000"
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require("./app/models")
const Role = db.role;

db.mongoose
    .connect("")
    .then(() => {
        console.log("Successfully connected to MongoDB");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

function intial(){
    Role.estimatedDocumentCount((err, count) => {
        if(!err && count === 0){
            new Role({
                name: "user"
                }).save(err => {
                    if(err) {
                        console.log("error",err);
                    }
                    console.log("added 'user' to roles collection");
                });

            new Role({
                name: "moderator"
                }).save(err => {
                    if (err) {
                        console.log("error", err);
                    }
                    console.log("added 'moderator' to roles collection");
                });

            new Role({
                name: "admin"
                }).save(err => {
                    if (err) {
                        console.log("error", err);
                    }
                    console.log("added 'admin' to roles collection");
                });
        }
    })
}

app.get("/", (req, res) => {
    res.json({message: "Welcome!"});
})

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is live on port 5000");
})