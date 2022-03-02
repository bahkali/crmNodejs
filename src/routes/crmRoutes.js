const routes = (app) => {
  app
    .route("/contact")
    .get(
      (req, res, next) => {
        // ADDED middleware to get endpoint
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      },
      (req, res, nex) => {
        res.send("GET request successful!");
      }
    )
    .post((req, res) => {
      res.send("POST resquest successful!");
    });

  app
    .route("/contact/:contactID")
    .put((req, res) => {
      res.send("PUT request successful");
    })
    .delete((req, res) => {
      res.send("Delete request successful");
    });
};

module.exports = routes;
