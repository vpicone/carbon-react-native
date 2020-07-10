const path = require("path");

const reactNativePath = require.resolve("react-native");
const reactNativeFolder = `${
  reactNativePath.split("node_modules/react-native/")[0]
}node_modules/react-native/`;

const getConfig = async () => ({
  watchFolders: [path.resolve(__dirname, "../../")],
  transformer: {
    publicPath: "/assets/dark/magic",
    getTransformOptions: async () => ({
      transform: { experimentalImportSupport: false, inlineRequires: false },
    }),
  },
  resolver: {
    blacklistRE: new RegExp(
      `^((?!${reactNativeFolder.replace(
        "/",
        "\\/"
      )}).)*\\/node_modules\\/react-native\\/.*$`
    ),
  },
  server: {
    enhanceMiddleware: (middleware) => {
      return (req, res, next) => {
        if (req.url.startsWith("/assets/dark/magic")) {
          req.url = req.url.replace("/assets/dark/magic", "/assets");
        } else if (req.url.startsWith("/assets/dark")) {
          req.url = req.url.replace("/assets/dark", "/assets/..");
        } else if (req.url.startsWith("/assets")) {
          req.url = req.url.replace("/assets", "/assets/../..");
        }
        return middleware(req, res, next);
      };
    },
  },
});

module.exports = getConfig();
