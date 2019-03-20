module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        targets: {
          browsers: ['last 2 Chrome versions', 'last 2 Firefox versions'],
        },
      },
    ],
    '@babel/preset-typescript',
  ],
};
