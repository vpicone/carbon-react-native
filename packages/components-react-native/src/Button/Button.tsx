import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextProps,
  Platform,
} from 'react-native';

export interface ButtonProps
  extends TouchableNativeFeedbackProps,
    TouchableOpacityProps {
  buttonStyle?: StyleProp<ViewStyle>;
  title?: string;
  titleProps?: TextProps;
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  type?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  disabledTitleStyle?: StyleProp<TextStyle>;
  disabledButtonStyle?: StyleProp<ViewStyle>;
}

const theme = {
  colors: {
    interactive01: '#0f62fe',
    danger: '#da1e28',
  },
};

const Button: React.FC<ButtonProps> = ({ title }) => {
  const TouchableComponent = Platform.select<React.ComponentClass>({
    android: TouchableNativeFeedback,
    default: TouchableOpacity,
  });

  return (
    <View style={styles.container}>
      <TouchableComponent>
        <View style={styles.button}>
          {title && <Text style={styles.title}>{title}</Text>}
        </View>
      </TouchableComponent>
    </View>
  );
};

// style order should go from container in
const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: theme.colors.danger,
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
