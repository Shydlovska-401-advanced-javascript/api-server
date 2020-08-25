'use strict';

const categoriesSchema = require('./categories.schema.js');
const DataModel = require('./model.js');

class Categories extends DataModel { }


module.exports = new Categories(categoriesSchema);



