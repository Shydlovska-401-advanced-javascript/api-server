'use strict';

const express = require('express');

const morgan = require('morgan');
const cors = require('cors');


// const logRequest = require('../middleware/logger.js');
const time = require('../middleware/timestamp.js');
// const DbObject = require('./db.class.js');
const error404 = require('../middleware/404.js');
const error500 = require('../middleware/500.js');
const categRouter = require('../routes/categories.js')
const prodRouter = require('../routes/products.js')


const app = express();
// let db = [];
// Global Middleware

app.use(express.json()); // step in front of ALL requests, inspect it for a bordy and parse in as needed
app.use(time);
// app.use(logRequest);
app.use(categRouter);
app.use(prodRouter);

// 3rd Party middleware
app.use(morgan('dev'));
app.use(cors());

app.use('*',error404);
app.use(error500);



module.exports = {
    server:app,
    start: port =>{
        const PORT = port || process.env.PORT || 3000;
        app.listen(PORT,  () => console.log(`Listening on ${PORT}`));
    }
}



