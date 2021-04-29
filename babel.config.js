module.exports = (env) => {
  const target = env.caller((caller) => caller && caller.target);
  const isNode = target === 'node';

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: isNode ? { node: true } : '> 1%',
        },
      ],
      '@babel/preset-react',
    ],
    plugins: ['@loadable/babel-plugin'],
  };
};
