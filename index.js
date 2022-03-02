const express = require("express");
const routes = require("./src/routes/crmRoutes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
// Mongoose connection
const dbUri = process.env.DBURI;
mongoose.Promise = global.Promise;
mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log(err));

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES
app.get("/", (req, res, next) => {
  res.send("Hello");
});
// CRM Routes in src
routes(app);

app.use("/contact", routes);

const PORT = 4000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
