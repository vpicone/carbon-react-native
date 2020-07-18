import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { white as theme } from '@carbon/themes';
import { rgba } from '@carbon/colors';
import {
  Pressable,
  PressableProps,
  GestureResponderEvent,
  Animated,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextProps,
  Platform,
  ViewProps,
} from 'react-native';

export interface ButtonProps extends Omit<PressableProps, 'children'> {
  title?: string;
  titleProps?: TextProps;
  titleStyle?: StyleProp<TextStyle>;
  pressableProps?: PressableProps;
  pressableStyle?: StyleProp<ViewStyle>;
  pressedStyle?: StyleProp<ViewStyle>;
  containerProps?: ViewProps;
  containerStyle?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  disabled?: boolean;
  disabledTitleStyle?: StyleProp<TextStyle>;
  disabledPressableStyle?: StyleProp<ViewStyle>;
  kind?: 'primary' | 'secondary' | 'danger';
}

// TODO: flatten necessary?

// Engineering notes
// - rename native events when destructuring: onEvent => onEventProp
// - call event handlers as soon as possible
// - event handlers called handleX locally

const Button: React.FC<ButtonProps> = ({
  title,
  titleProps,
  titleStyle,
  pressableProps,
  pressableStyle,
  containerProps,
  containerStyle,
  onPressIn: onPressInProp,
  onPressOut: onPressOutProp,
  kind = 'primary',
}) => {
  const { current: backgroundAnimation } = useRef(new Animated.Value(0));

  const handleOnPressIn = (e: GestureResponderEvent) => {
    onPressInProp && onPressInProp(e);
    Animated.timing(backgroundAnimation, {
      toValue: 1,
      duration: 70,
      useNativeDriver: false,
    }).start();
  };

  const handleOnPressOut = (e: GestureResponderEvent) => {
    onPressOutProp && onPressOutProp(e);
    Animated.timing(backgroundAnimation, {
      toValue: 0,
      duration: 70,
      useNativeDriver: false,
    }).start();
  };

  const getBackgroundColors = () => {
    switch (kind) {
      case 'primary':
        return {
          base: rgba(theme.interactive01, 1),
          active: rgba(theme.activePrimary, 1),
        };
      case 'secondary':
        return {
          base: rgba(theme.interactive02, 1),
          active: rgba(theme.activeSecondary, 1),
        };
      case 'danger':
        return {
          base: rgba(theme.danger, 1),
          active: rgba(theme.activeDanger, 1),
        };
    }
  };

  const { base, active } = getBackgroundColors();

  const backgroundColorInterpolation = backgroundAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [base, active],
  });

  return (
    <Animated.View
      {...containerProps}
      style={[
        styles.container,
        containerStyle,
        { backgroundColor: backgroundColorInterpolation },
      ]}>
      <Pressable
        {...pressableProps}
        onPressIn={handleOnPressIn}
        onPressOut={handleOnPressOut}
        style={[styles.pressable, pressableStyle]}>
        {title && (
          <Text {...titleProps} style={[styles.title, titleStyle]}>
            {title}
          </Text>
        )}
      </Pressable>
    </Animated.View>
  );
};

// style order should go from container in
const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  pressable: {
    flexDirection: 'row',
    padding: 16,
    paddingRight: 64,
  },
  title: {
    fontFamily: 'IBMPlexSans',
    color: theme.text04,
    fontSize: Platform.select({
      android: 16,
      default: 18,
    }),
  },
});

Button.defaultProps = {
  title: '',
};

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
