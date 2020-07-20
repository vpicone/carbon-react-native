import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text, TextProps } from '@vpicone/components-react-native';

const data: TextProps[] = [
  {
    kind: 'code',
    children: 'Code',
  },
  {
    kind: 'label',
    children: 'Label',
  },
  { kind: 'p1', children: 'Body-short' },

  { kind: 'p2', children: 'Body-long' },
  {
    kind: 'h1',
    children: 'Heading-01',
  },
  {
    kind: 'h2',
    children: 'Heading-02',
  },
  {
    kind: 'h3',
    children: 'Heading-03',
  },
  {
    kind: 'h4',
    children: 'Heading-04',
  },
  {
    kind: 'h5',
    children: 'Heading-05',
  },
  {
    kind: 'h6',
    children: 'Heading-06',
  },
  {
    kind: 'h7',
    children: 'Heading-07',
  },
];

const TextList: React.FC = () => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      data={data}
      renderItem={({ item, index }) => <Text key={index} {...item} />}
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

export default TextList;
