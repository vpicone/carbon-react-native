import React from 'react';
import { AppLoading } from 'expo';
import { SafeAreaView, StatusBar, ScrollView, View } from 'react-native';

import {
  Text,
  useFonts,
  ThemeProvider,
  useTheme,
  Theme,
  Icon,
} from '@vpicone/components-react-native';

import ButtonDemo from './components/demos/Button';
import TextDemo from './components/demos/Text';

const Demo = () => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[styles.safeArea(theme), { backgroundColor: theme.uiBackground }]}>
      <ScrollView style={styles.scrollView}>
        <Text kind="h6">Button</Text>
        <ButtonDemo />
        <Text kind="h6">Icons</Text>
        <View style={styles.icons}>
          <Icon size={48} name="windy--dust" />
          <Icon size={48} name="face--mask" />
        </View>
        <Text kind="h6">Typography</Text>
        <TextDemo />
      </ScrollView>
    </SafeAreaView>
  );
};

const App: React.FC = () => {
  const [fontsLoaded] = useFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider>
        <StatusBar barStyle="light-content" />
        <Demo />
      </ThemeProvider>
    );
  }
};

const styles = {
  safeArea: (theme: Theme) => ({
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: theme.uiBackground,
  }),
  scrollView: {
    marginLeft: 16,
    marginRight: 16,
  },
  icons: {
    marginBottom: 16,
  },
};

export default App;
