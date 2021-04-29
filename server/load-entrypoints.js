const fs = require('fs/promises');

module.exports = async function loadEntrypoints() {
  return {
    loadableStats: JSON.parse(
      await fs.readFile('./public/bundles/loadable-stats.json', 'utf-8')
    ),
    client: JSON.parse(await fs.readFile('./public/bundles/entrypoints.json')),
    server: JSON.parse(
      await fs.readFile('./public/bundles-ssr/entrypoints.json')
    ),
  };
};
