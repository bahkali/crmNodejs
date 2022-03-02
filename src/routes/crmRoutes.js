const routes = (app) => {
  app
    .route("/contact")
    .get((req, res) => {
      res.send("GET request successful!");
    })
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
