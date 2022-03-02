const { addNewContact, getContact } = require("../controllers/crmController");

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      // ADDED middleware to get endpoint
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContact)
    .post(addNewContact);

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
