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
    ['@semantic-release/exec', {publishCmd: 'shipit firefox dist'}],
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: 'ruler.xpi',
          },
          {
            path: 'ruler.zip',
          },
        ],
      },
    ],
  ],
};
