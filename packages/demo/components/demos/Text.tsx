import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@vpicone/components-react-native';
import Stack from '../Stack';

const TextDemo: React.FC = () => {
  return (
    <Stack containerStyle={styles.container} gap="small">
      <Text kind="code">Code</Text>
      <Text kind="label">Label</Text>
      <Text kind="p1">Paragraph-01</Text>
      <Text kind="p2">Paragraph-02</Text>
      <Text kind="h1">Heading-01</Text>
      <Text kind="h2">Heading-02</Text>
      <Text kind="h3">Heading-03</Text>
      <Text kind="h4">Heading-04</Text>
      <Text kind="h5">Heading-05</Text>
      <Text kind="h6">Heading-06</Text>
      <Text kind="h7">Heading-07</Text>
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 24,
  },
});

export default TextDemo;
