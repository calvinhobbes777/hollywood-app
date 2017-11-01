const hapi = require("hapi");
const api = require("./api");

const server = new hapi.Server();

server.connection({
  host: "localhost",
  port: 7070,
  routes: { cors: true },
  router: { stripTrailingSlash: true }
});

server.register(
  [
    {
      register: api
    }
  ],
  () => {
    server.start(err => {
      if (err) {
        return console.log(err);
      } else {
        console.log(server.info.uri);
      }
    });
  }
);
