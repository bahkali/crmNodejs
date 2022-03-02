const mongoose = require("mongoose");
const ContactSchema = require("../models/crmModels");
// const ContactSchema = require("../models/crmModels");

const Contact = mongoose.model("Contact", ContactSchema);

const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);
  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

const getContact = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

module.exports = { addNewContact, getContact };
