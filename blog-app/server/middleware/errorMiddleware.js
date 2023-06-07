//fs that exe during the req / res process

//to override the default err handler by express
const errorHandler = (err, req, res, next) => {
  //if the status code that is setup on controller is true return it, else return 500(err - server)
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
  });
};

module.exports = {
  errorHandler,
};
