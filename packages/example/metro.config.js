/*
 * The expo-yarn-workspaces package defines a Metro configuration object that makes Metro work with Yarn workspaces.
 *
 * It configures Metro to:
 * - include packages from the workspace root
 * - resolves symlinked packages,
 * - excludes modules from Haste's module system,
 * - and exclude modules in the native Android and Xcode projects.
 *
 * You can further customize this configuration object before exporting it, if needed.
 * https://github.com/expo/expo/tree/master/packages/expo-yarn-workspaces
 */

const { createMetroConfiguration } = require('expo-yarn-workspaces');

module.exports = createMetroConfiguration(__dirname);
