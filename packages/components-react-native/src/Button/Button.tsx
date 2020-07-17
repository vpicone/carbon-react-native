import React from 'react';
import PropTypes from 'prop-types';
import { white as theme } from '@carbon/themes';
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextProps,
  Platform,
  ViewProps,
} from 'react-native';

export interface ButtonProps {
  title?: string;
  titleProps?: TextProps;
  titleStyle?: StyleProp<TextStyle>;
  pressableProps?: PressableProps;
  pressableStyle?: StyleProp<ViewStyle>;
  pressedStyle?: StyleProp<ViewStyle>;
  containerProps?: ViewProps;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  disabledTitleStyle?: StyleProp<TextStyle>;
  disabledPressableStyle?: StyleProp<ViewStyle>;
  type?: 'primary' | 'secondary' | 'tertiary';
}

// TODO: flatten necessary?

const Button: React.FC<ButtonProps> = ({
  title,
  titleProps,
  titleStyle,
  pressableProps,
  pressableStyle,
  pressedStyle,
  containerProps,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]} {...containerProps}>
      <Pressable
        style={({
          pressed,
        }: PressableStateCallbackType): StyleProp<ViewStyle> => [
          styles.pressable,
          pressableStyle,
          {
            backgroundColor: pressed ? theme.activeDanger : theme.danger,
          },
          pressed && pressedStyle,
        ]}
        {...pressableProps}>
        {title && (
          <Text style={[styles.title, titleStyle]} {...titleProps}>
            {title}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

// style order should go from container in
const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  pressable: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    paddingRight: 64,
  },
  title: {
    fontFamily: 'IBMPlexSans',
    color: '#ffffff',
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
