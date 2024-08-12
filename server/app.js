"use strict";

const fastify = require("fastify");

const routes = require("./routes");

async function createApp(logger) {
  const app = await fastify({
    logger
  });

  await routes.init(
      app
  );

  return app;
}

module.exports = createApp;
