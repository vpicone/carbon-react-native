import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, ButtonProps } from '@vpicone/components-react-native';

const data: ButtonProps[] = [
  {
    kind: 'primary',
    title: 'Primary (default)',
  },
  {
    kind: 'secondary',
    title: 'Secondary',
  },
  {
    kind: 'tertiary',
    title: 'Tertiary',
  },
  {
    kind: 'danger',
    title: 'Danger',
  },
  {
    kind: 'primary',
    title: 'Disabled',
    disabled: true,
  },
];

const ButtonList: React.FC = () => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      data={data}
      renderItem={({ item }) => <Button {...item} />}
      keyExtractor={(item) => item.title}
    />
  );
};

const styles = StyleSheet.create({
  seperator: {
    margin: 2,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ButtonList;
