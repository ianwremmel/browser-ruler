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
        publishCmd: './scripts/firefox.sh',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: {
          name: 'Firefox',
          path: './web-ext-artifacts/**/*.xpi',
        },
      },
    ],
  ],
};
