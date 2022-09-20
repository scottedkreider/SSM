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
    .connect("mongodb+srv://scottedkreider:MongoAdmin1234@cluster0.xfkqs.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Successfully connected to MongoDB");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });


app.get("/", (req, res) => {
    res.json({message: "Welcome!"});
})

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is live on port 5000");
})