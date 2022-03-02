const {
  addNewContact,
  getContact,
  getContactWithId,
  updateContact,
  deleteContact,
} = require("../controllers/crmController");

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
    .get(getContactWithId)
    .put(updateContact)
    .delete(deleteContact);
};

module.exports = routes;
