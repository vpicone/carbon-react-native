import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

// generated from https://icomoon.io/app
import iconMoonData from './carbon-icon-data.json';
import type { CarbonIconName } from './types';
import { useTheme } from '../theme/ThemeManager';

interface CarbonIconProps {
  name: CarbonIconName;
  size?: number;
  color?: string;
}

// TODO add proper types so we folks can use the other Icon features
const BaseIcon = createIconSetFromIcoMoon(
  iconMoonData,
  'CarbonIcons-Core',
  'CarbonIcons-Core.ttf'
);

export const Icon: React.FC<CarbonIconProps> = ({
  color: colorProp,
  size = 24,
  name,
}) => {
  const theme = useTheme();
  const color = colorProp ? colorProp : theme.text01;
  return <BaseIcon color={color} size={size} name={name} />;
};
