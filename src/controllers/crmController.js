const mongoose = require("mongoose");
const ContactSchema = require("../models/crmModels");
// const ContactSchema = require("../models/crmModels");

const Contact = mongoose.model("Contact", ContactSchema);

// Add a contact
const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);
  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// Get all contact
const getContact = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// Get contact by ID
const getContactWithId = (req, res) => {
  Contact.findById(req.params.contactID, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// Update contact by ID
const updateContact = (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.params.contactID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    }
  );
};

// Delete contact by ID
const deleteContact = (req, res) => {
  Contact.remove({ _id: req.params.contactID }, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "successfully deleted contact" });
  });
};

module.exports = {
  addNewContact,
  getContact,
  getContactWithId,
  updateContact,
  deleteContact,
};
