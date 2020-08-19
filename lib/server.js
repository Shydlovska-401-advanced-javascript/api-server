'use strict';

const express = require('express');
const app = express();
const logRequest = require('../middleware/logger.js');
const requestTime = require('../middleware/timestamp.js');
const DbObject = require('./db.class.js');
const error404 = require('../middleware/404.js');
const error500 = require('../middleware/500.js');
// const requestTime = express.Router()


// Global Middleware

app.use(express.json()); // step in front of ALL requests, inspect it for a bordy and parse in as needed
app.use(requestTime);
app.use(logRequest);


let db = [];

//  for category
app.post('/categories', (req, res) => {
    let record = req.body;
    record.id = db.length + 1;
    db.push(new DbObject.DbCategories(record, req.requestTime));
    res.json(record);
}) ;
app.get('/categories', (req, res) => {
    let count = db.length;
    let results = db;
    res.json({ count, results });
});
app.get('/categories/:id', (req, res) => {
    let id = req.params.id;
    let record = db.filter((rec) => rec.id === parseInt(id));
    res.json(record[0]);
});
app.put('/categories/:id', (req, res) => {
    let idToUpdate = req.params.id;
    let { name, id } = req.body;
    let updatedRecord = { name, id };
    db = db.map((record) => (record.id === parseInt(idToUpdate)) ? updatedRecord : record);
    res.json(updatedRecord);
});
app.delete('/categories/:id', (req, res) => {
    let id = req.params.id;
    db = db.filter((record) => record.id !== parseInt(id));
    res.json({});
});


//  for products
app.post('/products', (req, res) => {
let record = req.body;
record.id =db.length + 1;
db.push(new DbObject.DbProduct(record, req.requestTime));
res.json(record);
}) ;
app.get('/products', (req, res) => {
    let count = db.length;
    let results = db;
    res.json({ count, results });
});
app.get('/products/:id', (req, res) => {
    let id = req.params.id;
    let record = db.filter((rec)=> rec.id === parseInt(id));
    res.json(record[0]);

});
app.put('/products/:id', (req, res) => {
    let idToUpdate = req.params.id;
    let {name, id} = req.body;
    let updatedRecord = {name, id};
    db = db.map((record)=> (record.id === parseInt (idToUpdate))? updateRecord : record);
    res.json(updatedRecord);

});
app.delete('/products/:id', (req, res) => {
    let id = req.params.id;
    db = db.filter((record => record.id !== parseInt(id)));
    res.json({});

});


app.use('*',error404);
app.use(error500);



module.exports = {
    start: port =>{
        const PORT = port || process.env.PORT || 3000;
        app.listen(PORT,  () => console.log(`Listening on ${PORT}`));
    }
}