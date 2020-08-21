'use strict';

const rootDir = process.cwd();
const supergoose = require('./supergoose.js');
const {server} = require(`${rootDir}/lib/server.js`);
const mockRequest = supergoose(server);

const routes = require('../lib/routes/api-v1.js');


describe('rputes', () => {

describe('Products Model', () => {
  it('can create() a new product', () => {
    let obj = {name:'Mouse', price:9.99, description:'works good',category:'electronics', inStock:1};
    mockRequest.post(obj).then(results => {
    Object.keys(obj).forEach(key =>{
        expect(results[key]).toEqual(obj[key]);
    });
});
  });

  it('can get() a product', () => {
    let obj = {name:'Mouse', price:9.99, description:'works good',category:'electronics', inStock:1};
    mockRequest.post(obj)
      .then(record => {
        mockRequest.get(record._id)
          .then(product => {
            Object.keys(obj).forEach(key =>{
              expect(product[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can getAll()) a product', () => {
    let obj = {name:'Mouse', price:9.99, description:'works good',category:'electronics', inStock:1};
    mockRequest.post(obj)
   .then(record =>{
       mockRequest.get(record)
          .then(product => {
              expect(product).toEqual(obj);
            });
          });
        })
      });

  it('can delete() a product', () => {
    let obj = {name:'Mouse', price:9.99, description:'works good',category:'electronics', inStock:1};
    mockRequest.post(obj)
      .then(record => {
        mockRequest.delete(record._id)
          .then(product => {
            Object.keys(obj).forEach(key =>{
              expect(product[0][key]).toEqual({});
            });
          });
      });
  });

  it('can update() a product', () => {
    let obj = {name:'Mouse', price:9.99, description:'works good',category:'electronics', inStock:1};
    mockRequest.post(obj)
      .then(record => {
        mockRequest.update(record.id, req.body)
          .then(product => {
            Object.keys(obj).forEach(key =>{
              expect(product[0][key]).toEqual(product);
            });
          });
      });
  });

});
  