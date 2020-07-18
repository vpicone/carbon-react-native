// import { linkTo } from "@storybook/addon-links";
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Button from './Button';
// import CenterView from '../../../storybook/CenterView';

// addDecorator((storyFn) => {
//   <CenterView>{storyFn()}</CenterView>;
// });

storiesOf('Button', module)
  // .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Primary', () => <Button title="Primary button" />)
  .add('Secondary', () => <Button kind="secondary" title="Secondary button" />)
  .add('Danger', () => <Button kind="danger" title="Danger button" />);
