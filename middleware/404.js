'use strict';

/**
 * @param req
 * @param res
 * @param next
 */
module.exports = (req,res,next) => {
  console.log('Unknown Route');
  res.status(404);
  res.send('No idea what do you looking for');
  res.end();
};