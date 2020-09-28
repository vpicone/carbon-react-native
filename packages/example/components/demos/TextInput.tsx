import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from '@vpicone/components-react-native';
import Stack from '../Stack';

const TextInputDemo: React.FC = () => {
  return (
    <Stack containerStyle={styles.container}>
      <TextInput defaultValue="Default value" label="Label" />
      <TextInput placeholder="Just placeholder" label="Label" />
      <TextInput
        label="Label"
        placeholder="With helper text"
        helperText="Helper text goes here"
      />
      <TextInput
        defaultValue="User input text"
        label="Secure entry"
        secureTextEntry
      />
      <TextInput
        label="Secure entry with error"
        secureTextEntry
        helperText="Helper text goes here"
        invalidText="Error text goes here"
        placeholder="Password"
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 24,
  },
});

export default TextInputDemo;
