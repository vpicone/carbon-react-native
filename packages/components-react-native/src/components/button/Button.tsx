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

import { useTheme, Theme } from '../../theme/ThemeProvider';

export interface ButtonProps {
  title: string;
  titleProps?: TextProps;
  titleStyle?: StyleProp<TextStyle>;
  buttonProps?: PressableProps;
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
  buttonProps,
  kind = Kind.Primary,
  disabled = false,
}) => {
  const theme = useTheme();
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        styles.base({ kind, pressed, disabled, theme }),
      ]}
      {...buttonProps}>
      {({ pressed }) => (
        <Text
          style={[
            styles.title({ kind, pressed, disabled, theme }),
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
  title: ({
    kind,
    pressed,
    disabled,
    theme,
  }: {
    kind: Kind;
    pressed: boolean;
    disabled: boolean;
    theme: Theme;
  }) => {
    let color = theme.text04;

    if (kind === Kind.Tertiary) {
      if (pressed) {
        color = theme.inverse01;
      } else {
        color = theme.interactive03;
      }
    }

    if (disabled) {
      color = theme.disabled03;
    }

    return {
      color: color,
      fontFamily: 'IBMPlexSans',
      fontSize: 16,
    };
  },
  base: ({
    kind,
    pressed,
    disabled,
    theme,
  }: {
    kind: Kind;
    pressed: boolean;
    disabled: boolean;
    theme: Theme;
  }) => {
    if (disabled) {
      return {
        backgroundColor: theme.disabled02,
      };
    }

    if (kind === Kind.Secondary) {
      return {
        backgroundColor: pressed ? theme.activeSecondary : theme.interactive02,
      };
    }

    if (kind === Kind.Tertiary) {
      return {
        borderWidth: 1,
        borderColor: theme.interactive03,
        backgroundColor: pressed ? theme.interactive03 : 'transparent',
      };
    }

    if (kind === Kind.Danger) {
      return {
        backgroundColor: pressed ? theme.activeDanger : theme.danger,
      };
    }

    return {
      backgroundColor: pressed ? theme.activePrimary : theme.interactive01,
    };
  },
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};
