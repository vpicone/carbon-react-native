import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import { useTheme, Theme } from '../../theme/ThemeManager';

type ChildElement = React.ReactText | TextElement;

export type TextElement = React.ReactElement<TextProps>;

export interface TextProps extends RNTextProps {
  kind?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'h7'
    | 'code'
    | 'label'
    | 'p1'
    | 'p2';
  children?: ChildElement | ChildElement[];
  style?: TextStyle;
}

const Text: React.FC<TextProps> = ({
  children,
  kind = 'p1',
  style: styleProp,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <RNText style={[styles.text(theme), styles[kind], styleProp]} {...rest}>
      {children}
    </RNText>
  );
};

const styles = {
  text: (theme: Theme) => ({
    fontFamily: 'IBMPlexSans',
    color: theme.text01,
  }),
  h1: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'IBMPlexSans_SemiBold',
  },
  h2: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'IBMPlexSans_SemiBold',
  },
  h3: {
    fontSize: 20,
    lineHeight: 26,
  },
  h4: {
    fontSize: 20,
    lineHeight: 26,
  },
  h5: {
    fontSize: 32,
    lineHeight: 40,
  },
  h6: {
    fontSize: 42,
    lineHeight: 50,
  },
  h7: {
    fontSize: 54,
    lineHeight: 64,
  },
  code: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'IBMPlexMono',
  },
  label: {
    fontSize: 14,
    lineHeight: 16,
  },
  p1: {
    fontSize: 16,
    lineHeight: 18,
  },
  p2: {
    fontSize: 14,
    lineHeight: 20,
  },
};

export default Text;
