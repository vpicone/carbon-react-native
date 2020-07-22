import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

// generated from https://icomoon.io/app
import iconMoonData from './carbon-icomoon-data.json';
import type { IconProps } from 'react-native-vector-icons/Icon';
import type { CarbonIconName } from './types';

interface CarbonIconProps extends IconProps {
  name: CarbonIconName;
}

const CarbonIcon: React.FC<CarbonIconProps> = (props) => <Icon {...props} />;

// TODO add proper types so we folks can use the other Icon features
const Icon = createIconSetFromIcoMoon(
  iconMoonData,
  'CarbonIcons-Core',
  'CarbonIcons-Core.ttf'
);

export default CarbonIcon;
