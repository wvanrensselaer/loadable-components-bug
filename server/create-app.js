const express = require('express');
const loadEntrypoints = require('./load-entrypoints.js');
const serverSideRender = require('./server-side-render');

const LOCALE = 'en-US';

module.exports = function createApp() {
  const app = express();

  app.get('/', async (request, response) => {
    const entrypoints = await loadEntrypoints();

    const { html, scripts, links, styles, data } = await serverSideRender({
      entrypoints: entrypoints.server.entrypoints,
      loadableStats: entrypoints.loadableStats,
      locale: LOCALE,
    });

    response.send(`
      <!doctype html>
      <html>
        <head>
          <title>Loadable Components Demo</title>
          ${links}
        </head>
        <body>
          ${styles}
          <div id="container">${html}</div>
          <script>window.WEBPACK_ENTRY_DATA=${JSON.stringify(data)}</script>
          ${scripts}
        </body>
      </html>
    `);
  });

  app.use('/public', express.static('public'));

  return app;
};
