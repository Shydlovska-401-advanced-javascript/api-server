let requestTime = function (req, res, next) {
    req.requestTime = Date(Date.now());
    next()
  }

module.exports = requestTime;