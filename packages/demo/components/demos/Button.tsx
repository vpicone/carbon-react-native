import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@vpicone/components-react-native';
import Stack from '../Stack';

const ButtonList: React.FC = () => {
  return (
    <Stack containerStyle={styles.container} gap="small">
      <Button kind="primary" title="Primary (default)" />
      <Button kind="secondary" title="Secondary" />
      <Button kind="tertiary" title="Tertiary" />
      <Button kind="danger" title="Danger" />
      <Button kind="primary" title="Disabled" disabled />
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 24,
  },
});

export default ButtonList;
