import { useEffect, useState } from 'react';

import { loadAsync } from 'expo-font';

import { default as IBMPlexSans_Light } from '@vpicone/components-react-native/assets/plex/IBMPlexSans-Light.ttf';
import { default as IBMPlexMono_Regular } from '@vpicone/components-react-native/assets/plex/IBMPlexMono-Regular.ttf';
import { default as IBMPlexSans_Regular } from '@vpicone/components-react-native/assets/plex/IBMPlexSans-Regular.ttf';
import { default as IBMPlexSans_SemiBold } from '@vpicone/components-react-native/assets/plex/IBMPlexSans-SemiBold.ttf';

export const defaultMap = {
  IBMPlexSans_Light,
  IBMPlexMono: IBMPlexMono_Regular,
  IBMPlexSans: IBMPlexSans_Regular,
  IBMPlexSans_SemiBold,
  'CarbonIcons-Core': require('@vpicone/icons-react-native/assets/icons/CarbonIcons-Core.ttf'),
};

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
export function useFonts(additionalWeights?: {
  [key: string]: string;
}): [boolean, Error | null] {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

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
