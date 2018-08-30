import mongoose from 'mongoose';
import ContactSchema from "../models/crmModel";


const Contact = mongoose.model('Contact', ContactSchema);

const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err){
            res.send(err);
        }
        res.json(contact);
    });
};

export default addNewContact;