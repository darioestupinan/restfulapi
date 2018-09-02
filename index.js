'use strict';

import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/crmRoutes';
import bodyParser from 'body-parser';
import config from './config';

const app = express();
const PORT = 3000;
// moongose connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.database.url}:${config.database.port}/${config.database.name}`, {
    useNewUrlParser: true
});

//body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

//for serving static files
app.use(express.static('public/images'));

app.get('/', (req, res) => {
   res.send(`node and express server are running in port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`your server is running on port ${PORT}`);
});
