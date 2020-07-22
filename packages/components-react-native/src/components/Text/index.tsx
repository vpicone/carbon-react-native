import React from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';

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
}

const Text: React.FC<TextProps> = ({ children, kind = 'p1' }) => {
  return <RNText style={[styles.text, styles[kind]]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'IBMPlexSans',
  },
  h1: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'IBMPlexSans-SemiBold',
  },
  h2: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'IBMPlexSans-SemiBold',
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
    fontSize: 12,
    lineHeight: 16,
  },
  p1: {
    fontSize: 14,
    lineHeight: 18,
  },
  p2: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Text;
