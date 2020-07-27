import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

// generated from https://icomoon.io/app
import iconMoonData from './carbon-icomoon-data.json';
import type { CarbonIconName } from './types';

interface CarbonIconProps {
  name: CarbonIconName;
  size?: number;
}

// TODO add proper types so we folks can use the other Icon features
const Icon = createIconSetFromIcoMoon(
  iconMoonData,
  'CarbonIcons-Core',
  'CarbonIcons-Core.ttf'
);

const CarbonIcon: React.FC<CarbonIconProps> = ({ size = 24, name }) => (
  <Icon size={size} name={name} />
);

export { default as useFonts } from './useFonts';

export default CarbonIcon;
