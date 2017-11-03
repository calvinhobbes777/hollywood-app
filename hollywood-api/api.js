const routes = require("./routes"); //requiring routes

const models = require("./models"); //requiring models

module.exports.register = function(server, options, next) {
  server.bind({
    //binding the models together
    models: models
  });

  server.route(routes); //setting the routes

  return next();
};

module.exports.register.attributes = {
  //setting the attributes
  name: "api",
  version: "1.0.0"
};
