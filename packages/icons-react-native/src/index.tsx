import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { Appearance } from 'react-native';

// generated from https://icomoon.io/app
import iconMoonData from './carbon-icomoon-data.json';
import type { CarbonIconName } from './types';
import { useTheme } from '@vpicone/components-react-native';

interface CarbonIconProps {
  name: CarbonIconName;
  size?: number;
  color?: string;
}

// TODO add proper types so we folks can use the other Icon features
const Icon = createIconSetFromIcoMoon(
  iconMoonData,
  'CarbonIcons-Core',
  'CarbonIcons-Core.ttf'
);

const CarbonIcon: React.FC<CarbonIconProps> = ({
  color: colorProp,
  size = 24,
  name,
}) => {
  const theme = useTheme();
  const color = colorProp ? colorProp : theme.text01;
  return <Icon color={color} size={size} name={name} />;
};

export { default as useFonts } from './useFonts';

export default CarbonIcon;
