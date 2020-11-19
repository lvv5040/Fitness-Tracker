//bring in the necessary packages
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

//define a connection port
const PORT = process.env.PORT || 7117;

//craete and instacne of express
const app = express();

//set up body parsers
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//make public folder acceible to the client
app.use(express.static("public"));

//establish connection to our document/db
mongoose.connect(process.env.MONG_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//set up our routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

//listen to port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}....`);
});