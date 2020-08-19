'use strict';

const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {


  // it('should respond with a 404 on an invalid route', () => {

  //   return mockRequest
  //     .get('/bad')
  //     .then(results => {
  //       expect(results).toBe(404);
  //     }).catch(console.error);

  // });

  // it('should respond with a 404 on an invalid method', () => {

  //   return mockRequest
  //     .post('/')
  //     .then(results => {
  //       expect(results.status).toBe(404);
  //     }).catch(console.error);

  // });

  it('should respond properly on request to /categories', async () => {

    // return mockRequest
    const response = await mockRequest
      .get('/categories');
        expect(response.status).toBe(200);
      

  });

  // What strategies should we use to test POST, PUT, DELETE?

});