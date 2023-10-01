//require modules
const express = require("express");
const morgan = require("morgan");
const eventRoutes = require("./routes/eventRoutes");

//create app
const app = express();

//config app
let port = 3000;
let host = "localhost";
app.set("view engine", "ejs");

//middleware functions
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

//setup routes
app.get("/", (req, res) => {
  res.render("index");
});

app.use('/events', eventRoutes);

//start server
app.listen(port, host, () => {
  console.log("Server is running on port", port);
});
