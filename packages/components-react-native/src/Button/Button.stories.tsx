// import { linkTo } from "@storybook/addon-links";
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { default as Button } from './Button';
import { select, boolean } from '@storybook/addon-knobs';
// import CenterView from '../../../storybook/CenterView';

// addDecorator((storyFn) => {
//   <CenterView>{storyFn()}</CenterView>;
// });

const options = ['primary', 'secondary', 'tertiary', 'danger'];
storiesOf('Button', module).add('Primary', () => {
  const disabled = boolean('disabled', false);
  return (
    <Button
      kind={select('kind', options, 'primary')}
      disabled={disabled}
      title="Primary button"
    />
  );
});
