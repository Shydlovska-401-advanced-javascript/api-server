'use strict';

const rootDir = process.cwd();
const supergoose = require('./supergoose.js');
const {server} = require(`${rootDir}/lib/server.js`);
const mockRequest = supergoose(server);

describe('api server', () => {

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foo')
      .then(results => {
        expect(results.status).toBe(404);
      });

  });

  it('should respond properly on request to /api/v1/categories', () => {

    return mockRequest
      .get('/api/v1/categories')
      .then(results => {
        expect(results.status).toBe(200);
      });

  });

  it('should be able to post to /api/v1/categories', () => {

    let obj = {name:'test', description:'testing app'};

    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.name).toEqual(obj.name);
      });

  });


  it('following a post to categories, should find a single record', () => {

    let obj = {name:'testing', description:'kates test'};

    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then(results => {
        return mockRequest.get(`/api/v1/categories/${results.body._id}`)
          .then(list => {
            expect(list.status).toBe(200);
            expect(list.body[0].name).toEqual(obj.name);
            expect(list.body[0].description).toEqual(obj.description);
           
          });
      });

  });

});