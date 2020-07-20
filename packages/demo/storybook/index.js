// import React from 'react';
import {
  configure,
  getStorybookUI,
  addDecorator,
} from '@storybook/react-native';
import { AppRegistry } from 'react-native';
import { default as asyncStorage } from '@react-native-community/async-storage';
import { withKnobs } from '@storybook/addon-knobs';
import './rn-addons';

import { loadStories } from './story-loader.js';
// import Wrapper from './Wrapper';

addDecorator(withKnobs);

// import stories
configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
// https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#react-native-async-storage
const StorybookUIRoot = getStorybookUI({
  asyncStorage,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('demo', () => StorybookUIRoot);

export default StorybookUIRoot;
