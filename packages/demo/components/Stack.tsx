import React from 'react';
import { StyleSheet, View, ViewStyle, StyleProp } from 'react-native';

type StackProps = {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  gap?: 'small' | 'default' | 'large' | number;
};

const Stack: React.FC<StackProps> = ({
  children,
  containerStyle,
  itemStyle,
  gap = 'default',
}) => {
  const gapStyle = typeof gap === 'string' ? styles[gap] : { marginTop: gap };
  return (
    <View style={containerStyle}>
      {React.Children.map(children, (Child, index) => (
        <View style={[index !== 0 && gapStyle, itemStyle]}>{Child}</View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  small: {
    marginTop: 8,
  },
  default: {
    marginTop: 16,
  },
  large: {
    marginTop: 24,
  },
});

export default Stack;
