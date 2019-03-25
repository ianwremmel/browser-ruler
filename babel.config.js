/* eslint-env node */
/* eslint-disable sort-keys */

module.exports = {
  presets: ['@babel/env', '@babel/preset-typescript'],
  overrides: [
    {
      test: 'src/**',
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
    },
  ],
};
/* eslint-enable sort-keys */
