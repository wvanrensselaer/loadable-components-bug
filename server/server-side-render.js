const path = require('path');

module.exports = async function serverSideRender({
  entrypoints,
  loadableStats,
  locale,
}) {
  const entryFile = entrypoints.main.assets.find(({ name }) =>
    name.endsWith('.js')
  ).name;
  const render = require(path.join(
    process.cwd(),
    'public',
    'bundles-ssr',
    entryFile
  )).default;

  return {
    ...(await render({ loadableStats, locale })),
    data: {
      ssr: true,
      locale,
    },
  };
};
