module.exports = {
  verifyConditions: ['condition-circle'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/exec',
      {prepareCmd: 'VERSION=${nextRelease.version} npm run build'},
    ],
    ['@semantic-release/exec', {publishCmd: 'shipit chrome dist'}],
    [
      '@semantic-release/exec',
      {
        publishCmd: [
          'web-ext',
          'sign',
          '--source-dir',
          'dist',
          '--api-key',
          process.env.WEXT_SHIPIT_FIREFOX_JWT_ISSUER,
          '--api-secret',
          process.env.WEXT_SHIPIT_FIREFOX_JWT_SECRET,
        ].join(' '),
      },
    ],
    ['@semantic-release/github'],
  ],
};
