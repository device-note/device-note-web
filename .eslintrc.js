const fs = require('fs');

const foldersUnderSrc = fs
  .readdirSync('src', { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

module.exports = {
  extends: ['react-app', 'react-app/jest'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^@?\\w'],
          [`^@?(${foldersUnderSrc.join('|')})(/.*|$)`, '^\\.'],
        ],
      },
    ],
  },
};
