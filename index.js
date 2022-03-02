const express = require("express");

const app = express();

// MIDDLEWARE

// ROUTES
app.get("/", (req, res, next) => {
  res.send("Hello");
});

const PORT = 4000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
