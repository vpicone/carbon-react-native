import { useEffect, useState } from 'react';

import { loadAsync, FontSource } from 'expo-font';

/**
 * Load a map of custom fonts to use in textual elements.
 * The map keys are used as font names, and can be used with `fontFamily: <name>;`.
 * It returns a boolean describing if all fonts are loaded.
 *
 * Note, the fonts are not "reloaded" when you dynamically change the font map.
 *
 * @see https://docs.expo.io/versions/latest/sdk/font/
 * @example const [loaded, error] = useFonts(...);
 */
export function useFonts(
  additionalWeights?: Record<availableWeights, FontSource>
): [boolean, Error | null] {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const defaultMap = {
    IBMPlexMono: require('@vpicone/components-react-native/assets/plex/IBMPlexMono-Regular.ttf'),
    IBMPlexSans: require('@vpicone/components-react-native/assets/plex/IBMPlexSans-Regular.ttf'),
    IBMPlexSans_Light: require('@vpicone/components-react-native/assets/plex/IBMPlexSans-Light.ttf'),
    IBMPlexSans_SemiBold: require('@vpicone/components-react-native/assets/plex/IBMPlexSans-SemiBold.ttf'),
    'CarbonIcons-Core': require('@vpicone/components-react-native/assets/icons/CarbonIcons-Core.ttf'),
  };

  const map = { ...defaultMap, ...additionalWeights };

  useEffect(() => {
    loadAsync(map)
      .then(() => setLoaded(true))
      .catch(setError);
  }, [map]);

  return [loaded, error];
}

export { default as IBMPlexMono_Bold } from '@vpicone/components-react-native/assets/plex/IBMPlexMono-Bold.ttf';
export { default as IBMPlexMono_BoldItalic } from '@vpicone/components-react-native/assets/plex/IBMPlexMono-BoldItalic.ttf';
export { default as IBMPlexMono_ExtraLight } from '@vpicone/components-react-native/assets/plex/IBMPlexMono-ExtraLight.ttf';
export { default as IBMPlexMono_ExtraLightItalic } from '@vpicone/components-react-native/assets/plex/IBMPlexMono-ExtraLightItalic.ttf';
export { default as IBMPlexMono_Italic } from '@vpicone/components-react-native/assets/plex/IBMPlexMono-Italic.ttf';
export { default as IBMPlexMono_Light } from '@vpicone/components-react-native/assets/plex/IBMPlexMono-Light.ttf';
export { default as IBMPlexMono_LightItalic } from '@vpicone/components-react-native/assets/plex/IBMPlexMono-LightItalic.ttf';
export { default as IBMPlexMono_Medium } from '@vpicone/components-react-native/assets/plex/IBMPlexMono-Medium.ttf';
export { default as IBMPlexMono_MediumItalic } from '@vpicone/components-react-native/assets/plex/IBMPlexMono-MediumItalic.ttf';
export { default as IBMPlexMono_SemiBold } from '@vpicone/components-react-native/assets/plex/IBMPlexMono-SemiBold.ttf';
export { default as IBMPlexMono_SemiBoldItalic } from '@vpicone/components-react-native/assets/plex/IBMPlexMono-SemiBoldItalic.ttf';
export { default as IBMPlexMono_Text } from '@vpicone/components-react-native/assets/plex/IBMPlexMono-Text.ttf';
export { default as IBMPlexMono_TextItalic } from '@vpicone/components-react-native/assets/plex/IBMPlexMono-TextItalic.ttf';
export { default as IBMPlexMono_Thin } from '@vpicone/components-react-native/assets/plex/IBMPlexMono-Thin.ttf';
export { default as IBMPlexMono_ThinItalic } from '@vpicone/components-react-native/assets/plex/IBMPlexMono-ThinItalic.ttf';
export { default as IBMPlexSans_Bold } from '@vpicone/components-react-native/assets/plex/IBMPlexSans-Bold.ttf';
export { default as IBMPlexSans_BoldItalic } from '@vpicone/components-react-native/assets/plex/IBMPlexSans-BoldItalic.ttf';
export { default as IBMPlexSans_ExtraLight } from '@vpicone/components-react-native/assets/plex/IBMPlexSans-ExtraLight.ttf';
export { default as IBMPlexSans_ExtraLightItalic } from '@vpicone/components-react-native/assets/plex/IBMPlexSans-ExtraLightItalic.ttf';
export { default as IBMPlexSans_Italic } from '@vpicone/components-react-native/assets/plex/IBMPlexSans-Italic.ttf';
export { default as IBMPlexSans_LightItalic } from '@vpicone/components-react-native/assets/plex/IBMPlexSans-LightItalic.ttf';
export { default as IBMPlexSans_Medium } from '@vpicone/components-react-native/assets/plex/IBMPlexSans-Medium.ttf';
export { default as IBMPlexSans_MediumItalic } from '@vpicone/components-react-native/assets/plex/IBMPlexSans-MediumItalic.ttf';
export { default as IBMPlexSans_SemiBoldItalic } from '@vpicone/components-react-native/assets/plex/IBMPlexSans-SemiBoldItalic.ttf';
export { default as IBMPlexSans_Text } from '@vpicone/components-react-native/assets/plex/IBMPlexSans-Text.ttf';
export { default as IBMPlexSans_TextItalic } from '@vpicone/components-react-native/assets/plex/IBMPlexSans-TextItalic.ttf';
export { default as IBMPlexSans_Thin } from '@vpicone/components-react-native/assets/plex/IBMPlexSans-Thin.ttf';
export { default as IBMPlexSans_ThinItalic } from '@vpicone/components-react-native/assets/plex/IBMPlexSans-ThinItalic.ttf';

type availableWeights =
  | 'IBMPlexMono_Bold'
  | 'IBMPlexMono_BoldItalic'
  | 'IBMPlexMono_ExtraLight'
  | 'IBMPlexMono_ExtraLightItalic'
  | 'IBMPlexMono_Italic'
  | 'IBMPlexMono_Light'
  | 'IBMPlexMono_LightItalic'
  | 'IBMPlexMono_Medium'
  | 'IBMPlexMono_MediumItalic'
  | 'IBMPlexMono_SemiBold'
  | 'IBMPlexMono_SemiBoldItalic'
  | 'IBMPlexMono_Text'
  | 'IBMPlexMono_TextItalic'
  | 'IBMPlexMono_Thin'
  | 'IBMPlexMono_ThinItalic'
  | 'IBMPlexSans_Bold'
  | 'IBMPlexSans_BoldItalic'
  | 'IBMPlexSans_ExtraLight'
  | 'IBMPlexSans_ExtraLightItalic'
  | 'IBMPlexSans_Italic'
  | 'IBMPlexSans_LightItalic'
  | 'IBMPlexSans_Medium'
  | 'IBMPlexSans_MediumItalic'
  | 'IBMPlexSans_SemiBoldItalic'
  | 'IBMPlexSans_Text'
  | 'IBMPlexSans_TextItalic'
  | 'IBMPlexSans_Thin'
  | 'IBMPlexSans_ThinItalic';
