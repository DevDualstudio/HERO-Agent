import React, { useRef, useState } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { TextInput as TextInputPaper } from 'react-native-paper';
import { Colors, Typography } from '../styles';
import { DefaultTheme } from 'react-native-paper';
import paperTheme from '../config/paperTheme';

const TextInput = (
  props: any & { icon: React.Component; style?: ViewStyle },
) => {
  const inputRef: any = useRef();

  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <TextInputPaper
      {...props}
      style={[styles.input, props.style]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      ref={inputRef}
      theme={{
        ...DefaultTheme,
        ...paperTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: Colors.heroic,
          background: 'transparent',
          text: Colors.heroic,
          placeholder: '#C3C5D3',
        },
        fonts: {
          light: { fontFamily: 'Futura-Med' },
          medium: { fontFamily: 'Futura-Med' },
          regular: { fontFamily: 'Futura-Med' },
          thin: { fontFamily: 'Futura-Med' },
        },
      }}
      left={
        props.icon && (
          <TextInputPaper.Icon
            centered
            style={styles.icon}
            name={() => (
              <props.icon color={isFocused ? Colors.heroic : '#C3C5D3'} />
            )}
            onPress={() => {}}
          />
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  input: {
    ...Typography.fontSize.x18,
    ...Typography.fontFamily.Medium,
    height: 51,
  },
  icon: {
    marginTop: 10,
  },
});

export default TextInput;
