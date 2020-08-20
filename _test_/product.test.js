const products = require('../models/products/product-model.js');
// let products = new Product();

require('./supergoose.js');

describe('Products Model', () => {
  it('can create() a new product', () => {
    let obj = {name:'Mouse', price:9.99, description:'works good',category:'electronics', inStock:1};
    return products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a product', () => {
    let obj = {name:'Mouse', price:9.99, description:'works good',category:'electronics', inStock:1};
    return products.create(obj)
      .then(record => {
        return products.get(record._id)
          .then(product => {
            Object.keys(obj).forEach(key =>{
              expect(product[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

});