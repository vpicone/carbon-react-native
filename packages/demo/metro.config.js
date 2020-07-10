// https://engineering.brigad.co/react-native-monorepos-code-sharing-f6c08172b417
const path = require('path');

module.exports = {
  watchFolders: [path.resolve(__dirname, '../../')],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
