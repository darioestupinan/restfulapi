import mongoose, { Mongoose, Types } from 'mongoose';
import ContactSchema from "../models/crmModel";


const Contact = mongoose.model('Contact', ContactSchema);

const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

const getContactById = (req, res) => {
    var objectId = parseToObjectId(req.params.contactId);
    Contact.findById(objectId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

const updateContact = (req, res) => {
    Contact.findOneAndUpdate(
        { _id: req.params.contactId }, 
        req.body, 
        { new: true }, 
        (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
};

const deleteContact = (req,res)=>{
    Contact.remove({_id: req.params.contactId}, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Contact deleted'});
    });
};

function parseToObjectId(contactId) {
    if (contactId) {
        return Types.ObjectId(contactId);
    }
}

export {
    addNewContact,
    getContacts,
    getContactById,
    updateContact,
    deleteContact
};