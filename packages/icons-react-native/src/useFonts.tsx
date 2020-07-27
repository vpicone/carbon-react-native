import { useFonts } from 'expo-font';

const useCarbonFonts = (): [boolean, Error | null] => {
  const [loaded, error] = useFonts({
    'CarbonIcons-Core': require('@vpicone/icons-react-native/assets/icons/CarbonIcons-Core.ttf'),
  });

  return [loaded, error];
};

export default useCarbonFonts;
