const expressSession = require("express-session");

const mongoDbStore = require("connect-mongodb-session");

function createSessionStore() {
  const MongoDbStore = mongoDbStore(expressSession);

  const store = new MongoDbStore({
    uri: "mongodb://127.0.0.1:27017",
    databaseName: "online-shop",
    collection: "sessions",
  });

  return store;
}

function createSessionConfig() {
  const sessionConfigObject = {
    secret: "Super-secret",
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      maxAge: 40 * 60 * 1000,
    },
  };

  return sessionConfigObject; 
}

module.exports = createSessionConfig;
