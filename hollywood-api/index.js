const hapi = require("hapi");

const routes = require("./routes");

const server = new hapi.Server();

server.connection({
  host: "localhost",
  port: 7070,
  routes: { cors: true },
  router: { stripTrailingSlash: true }
});

server.route(routes);

server.start(err => {
  if (err) {
    return console.log(err);
  } else {
    console.log(server.info.uri);
  }
});
