'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// const time = require('../middleware/timestamp.js');
const error404 = require('../middleware/404.js');
const error500 = require('../middleware/500.js');
const routes = require('./routes/api-v1.js')



const app = express();



app.use(express.json()); // step in front of ALL requests, inspect it for a bordy and parse in as needed
// app.use(time);

app.use('/api/v1/',routes);


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



