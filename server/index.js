
const express = require(`express`);
const next = require(`next`);
const { resolve } = require(`path`);

const compression = require(`compression`);

const renderRoutes = require(resolve(`./server/routes`));

const dev = process.env.NODE_ENV === `development`;

module.exports = new Promise(async (resolve, reject) => {
  const dir = `.`;
  const app = next({ dev, dir });

  await app.prepare().catch(reject);

  let server = express();

  if (process.env.NODE_ENV === `development`) {
    process.on(`unhandledRejection`, (reason, p) => {
      console.log(`Unhandled Rejection at: Promise`, p, `reason:`, reason);
    });
  }

  server.enable(`trust proxy`);

  server.use(compression());

  server = renderRoutes(server, { dev, app });

  return resolve(server);
});

