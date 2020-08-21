'use strict';

const procutsSchema = require('./products.schema.js');
const DataModel = require('./model.js');

class Product extends DataModel { }


module.exports = new Product(procutsSchema);




