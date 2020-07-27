import { useFonts } from 'expo-font';

// This is automatically included in the carbon components `useFonts
const useCarbonIcons = (): [boolean, Error | null] => {
  const [loaded, error] = useFonts({
    'CarbonIcons-Core': require('@vpicone/icons-react-native/assets/icons/CarbonIcons-Core.ttf'),
  });

  return [loaded, error];
};

export default useCarbonIcons;
