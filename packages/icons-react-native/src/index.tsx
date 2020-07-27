import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

// generated from https://icomoon.io/app
import iconMoonData from './carbon-icomoon-data.json';
import type { IconProps } from 'react-native-vector-icons/Icon';
import type { CarbonIconName } from './types';

interface CarbonIconProps extends IconProps {
  name: CarbonIconName;
}

// TODO add proper types so we folks can use the other Icon features
const Icon = createIconSetFromIcoMoon(
  iconMoonData,
  'CarbonIcons-Core',
  'CarbonIcons-Core.ttf'
);

const CarbonIcon: React.FC<CarbonIconProps> = ({ size = 24, ...rest }) => (
  <Icon size={size} {...rest} />
);

export { default as useFonts } from './useFonts';

export default CarbonIcon;
