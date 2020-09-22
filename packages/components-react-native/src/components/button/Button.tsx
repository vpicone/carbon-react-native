import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  StyleProp,
  ViewStyle,
  Pressable,
  PressableProps,
  TextStyle,
  TextProps,
  ViewProps,
  PixelRatio,
} from 'react-native';

import { useTheme, Theme } from '../../theme/ThemeManager';

export interface ButtonProps {
  title: string;
  titleProps?: TextProps;
  titleStyle?: StyleProp<TextStyle>;
  pressableProps?: PressableProps;
  buttonStyle?: StyleProp<ViewStyle>;
  pressedStyle?: StyleProp<ViewStyle>;
  containerProps?: ViewProps;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  disabledTitleStyle?: StyleProp<TextStyle>;
  disabledButtonStyle?: StyleProp<ViewStyle>;
  kind?: Kind;
}

export enum Kind {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Danger = 'danger',
}

// TODO: flatten necessary?

/*
 * Engineering notes
 * - rename native events when destructuring: onEvent => onEventProp
 * - call event handlers as soon as possible
 * - event handlers called handleX locally
 * - Explicit prop pass through for each component (no {...rest}) it's to difficult for devs to know where it ends up in compound components
 * - user styles go last so they can override ours
 * - user props go last so they have ultimate control
 */

/*
 * Style order
 * 1. our styles
 * 2. their styles
 * 3. Our variant style
 * 4. their variant style
 */

export const Button: React.FC<ButtonProps> = ({
  title,
  titleProps,
  titleStyle: titleStyleProp,
  pressableProps,
  kind = Kind.Primary,
  disabled = false,
}) => {
  const theme = useTheme();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        styles.base({ kind, theme }),
        pressed && styles.basePressed({ kind, theme }),
        disabled && styles.baseDisabled({ theme }),
      ]}
      {...pressableProps}>
      {({ pressed }) => (
        <Text
          style={[
            styles.title({ kind, theme }),
            pressed && styles.titlePressed({ theme, kind }),
            disabled && styles.titleDisabled({ theme }),
            titleStyleProp,
          ]}
          {...titleProps}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

const styles = {
  button: {
    padding: 16 * Math.min(PixelRatio.getFontScale(), 1),
  },
  base: ({ kind, theme }: { kind: Kind; theme: Theme }) => {
    if (kind === Kind.Secondary) {
      return {
        backgroundColor: theme.interactive02,
      };
    }
    if (kind === Kind.Tertiary) {
      return {
        borderWidth: 1,
        borderColor: theme.interactive03,
        backgroundColor: 'transparent',
      };
    }
    if (kind === Kind.Danger) {
      return {
        backgroundColor: theme.danger,
      };
    }
    return {
      backgroundColor: theme.interactive01,
    };
  },
  basePressed: ({ kind, theme }: { kind: Kind; theme: Theme }) => {
    if (kind === Kind.Secondary) {
      return {
        backgroundColor: theme.activeSecondary,
      };
    }

    if (kind === Kind.Tertiary) {
      return {
        backgroundColor: theme.interactive03,
      };
    }

    if (kind === Kind.Danger) {
      return {
        backgroundColor: theme.activeDanger,
      };
    }

    return {
      backgroundColor: theme.activePrimary,
    };
  },
  baseDisabled: ({ theme }: { theme: Theme }) => {
    return {
      backgroundColor: theme.disabled02,
    };
  },
  title: ({ theme, kind }: { theme: Theme; kind: Kind }) => ({
    color: kind === Kind.Tertiary ? theme.interactive03 : theme.text04,
    fontFamily: 'IBMPlexSans',
    fontSize: 16,
  }),
  titlePressed: ({ theme, kind }: { theme: Theme; kind: Kind }) => ({
    color: kind === Kind.Tertiary ? theme.inverse01 : theme.text04,
  }),
  titleDisabled: ({ theme }: { theme: Theme }) => ({
    color: theme.disabled03,
  }),
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};
