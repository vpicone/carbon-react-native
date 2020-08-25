import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Kind } from '@vpicone/components-react-native';
import Stack from '../Stack';

const ButtonList: React.FC = () => {
  return (
    <Stack containerStyle={styles.container} gap="small">
      <Button kind={Kind.Primary} title="Primary (default)" />
      <Button kind={Kind.Secondary} title="Secondary" />
      <Button kind={Kind.Tertiary} title="Tertiary" />
      <Button kind={Kind.Danger} title="Danger" />
      <Button kind={Kind.Primary} title="Disabled" disabled />
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
