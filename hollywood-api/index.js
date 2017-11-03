const hapi = require("hapi"); //requiring files from node
const api = require("./api");

const server = new hapi.Server(); //creating a new server

server.connection({
  //setting the server connection
  host: "localhost",
  port: 7070,
  routes: { cors: true },
  router: { stripTrailingSlash: true }
});

server.register(
  //registering the server
  [
    {
      register: api
    }
  ],
  () => {
    server.start(err => {
      //starting the server
      if (err) {
        return console.log(err);
      } else {
        console.log(server.info.uri);
      }
    });
  }
);
