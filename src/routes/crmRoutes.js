import {addNewContact, getContacts} from "../controllers/crmControllers";

const routes = (app)=> {
    app.route('/contact')
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request from: ${req.method}`);
            next();
        }, getContacts)

        .post(addNewContact);
    app.route('contact/:id')
        .put((req, res) => {
            res.send('PUT request successful');
        })
        .delete((req, res) => {
            res.send('DELETE request successful');
        });
};

export default routes;