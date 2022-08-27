import React from 'react';
import {
  Button as UIKittenButton,
  ButtonProps as UIKittenButtonProps,
  Spinner,
} from '@ui-kitten/components';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { fontFamily, fontSize } from '../styles/typography';
import { TextStyle } from 'react-native-phone-input';

interface ButtonProps extends UIKittenButtonProps {
  loading?: boolean;
  style?: ViewStyle;
  textStyles?: TextStyle;
  children: string | number;
}

const LoadingIndicator = () => (
  <View style={styles.loadingIndicator}>
    <Spinner size="small" />
  </View>
);

const Button = ({
  loading,
  style = {},
  textStyles = {},
  children,
  ...props
}: ButtonProps) => {
  let accessoryRight = props.accessoryRight;
  if (loading) {
    accessoryRight = LoadingIndicator;
  }

  let appearance = props.appearance || 'filled';
  if (loading) {
    appearance = 'outline';
  }

  return (
    <UIKittenButton
      accessoryRight={accessoryRight}
      appearance={appearance}
      disabled={props.disabled || loading}
      style={{ ...styles.buttonBase, ...style }}
      {...props}>
      {({ style: evaStyle = {}, ...evaProps }) => (
        <Text {...evaProps} style={[evaStyle, styles.text, textStyles]}>
          {children}
        </Text>
      )}
    </UIKittenButton>
  );
};

const styles = StyleSheet.create({
  loadingIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBase: {
    borderRadius: 8,
    paddingVertical: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: 'normal',
    ...fontFamily.Demi,
  },
});

export default Button;
