var uriEnv =  process.env.MONGOLAB_URI ||
              process.env.MONGOHQ_URL;

var uriString = "mongodb://heroku_627lz14w:j53b01bnqebhqed650rbkean7d@ds047365.mlab.com:47365/heroku_627lz14w";

module.exports = {
  uriString: uriString,
  uriEnv: uriEnv
}
