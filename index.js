const express = require("express");
const routes = require("./src/routes/crmRoutes");

const app = express();

// MIDDLEWARE

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
