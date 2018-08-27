'use strict';

import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
   res.send(`node and express server are running in port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`your server is running on port ${PORT}`);
});
