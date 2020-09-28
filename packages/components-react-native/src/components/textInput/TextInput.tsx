import React, { useEffect, useState } from 'react';
import {
  TextInput as RNTextInput,
  View,
  ViewStyle,
  Pressable,
  TextStyle,
  TextInputProps,
  StyleProp,
  StyleSheet,
} from 'react-native';
import Text from '../text/Text';
import { Theme, useTheme } from '../../theme/ThemeManager';
import { Icon } from '../../icons';

type Status = 'error' | 'active' | null;

const TextInput: React.FC<
  {
    helperText?: string;
    invalidText?: string;
    secureTextEntry?: boolean;
    label?: string;
    containerStyle?: StyleProp<ViewStyle>;
  } & TextInputProps
> = (props) => {
  const theme = useTheme();
  const {
    helperText,
    invalidText,
    secureTextEntry: secureTextEntryProp,
    containerStyle,
    ...rest
  } = props;
  const caption = invalidText || helperText;
  const [secureTextEntry, setSecureTextEntry] = useState(secureTextEntryProp);
  const [isFocused, setIsFocused] = useState(false);
  const [status, setStatus] = useState<Status>(invalidText ? 'error' : null);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    let nextStatus: Status = isFocused ? 'active' : null;
    if (invalidText) {
      nextStatus = 'error';
    }
    setStatus(nextStatus);
  }, [isFocused, invalidText]);

  return (
    <View style={containerStyle}>
      <Text style={styles.label(theme)} kind="label">
        {props.label}
      </Text>
      <View style={styles.inputContainer(theme, status)}>
        <RNTextInput
          onFocus={onFocus}
          onBlur={onBlur}
          placeholderTextColor={theme.text05}
          style={styles.input(theme)}
          secureTextEntry={secureTextEntry}
          {...rest}
        />
        {invalidText && (
          <View style={staticStyles.iconContainer}>
            <Icon size={20} color={theme.support01} name="warning--filled" />
          </View>
        )}
        {secureTextEntryProp && (
          <Pressable
            onPress={() => setSecureTextEntry(!secureTextEntry)}
            style={staticStyles.iconContainer}>
            <Icon
              size={20}
              color={theme.icon01}
              name={secureTextEntry ? 'view' : 'view--off'}
            />
          </Pressable>
        )}
      </View>
      {caption && (
        <Text style={styles.caption(theme, status)} kind="label">
          {caption}
        </Text>
      )}
    </View>
  );
};

const styles = {
  label: (theme: Theme): TextStyle => ({
    color: theme.text02,
    marginBottom: 8,
  }),
  inputContainer: (theme: Theme, status: Status): ViewStyle => {
    let borderColor = theme.ui04;

    if (status === 'active') {
      borderColor = theme.focus;
    }

    if (status === 'error') {
      borderColor = theme.support01;
    }
    return {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.field01,
      borderColor: borderColor,
      borderWidth: status ? 2 : 0,
      borderBottomWidth: status ? 2 : 1,
      paddingLeft: status ? 16 : 18,
      paddingTop: status ? 12 : 14,
      paddingBottom: status ? 12 : 13,
      paddingRight: status ? 14 : 16,
    };
  },
  caption: (theme: Theme, status: Status): TextStyle => ({
    color: status === 'error' ? theme.support01 : theme.text02,
    marginTop: 8,
  }),
  input: (theme: Theme) => ({
    color: theme.text01,
    fontSize: 16,
    flexGrow: 1,
    flexShrink: 1,
  }),
};

const staticStyles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 14,
  },
});

export default TextInput;
