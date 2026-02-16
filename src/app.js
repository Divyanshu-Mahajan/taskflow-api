const express = require("express");
const registerRoutes = require("./routes");
const registerMiddlewares = require("./middlewares");
const app = express();

registerMiddlewares(app);
registerRoutes(app);

module.exports = app;