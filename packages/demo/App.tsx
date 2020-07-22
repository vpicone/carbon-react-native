import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, ScrollView } from 'react-native';

import { Text } from '@vpicone/components-react-native';

import ButtonDemo from './components/demos/Button';
import TextDemo from './components/demos/Text';

import Icon from '@vpicone/icons-react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <Text kind="h6">
            Button
            <Icon size={32} name="4K--filled" />
          </Text>
          <ButtonDemo />
          <Text kind="h6">Typography</Text>
          <TextDemo />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  list: {
    // backgroundColor: '#e0e0e0',
  },
});

export default App;
