const express = require("express");
const app = express();
const cors = require("cors")

//middleware
app.use(cors())
app.use(express.json())

// run nodemon
app.listen(5000, ()=> {
    console.log("server is started on port 5000")
})