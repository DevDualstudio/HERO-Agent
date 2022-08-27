import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ViewStyle } from 'react-native-phone-input';

interface CardBaseProps {
  style?: ViewStyle;
  noShadow?: boolean;
}

const CardBase: React.FC<CardBaseProps> = ({
  children,
  style = {},
  noShadow = false,
}) => {
  return (
    <View style={[styles.card, noShadow ? {} : styles.shadow, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',

    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#2e5bff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.07,
    shadowRadius: 2.22,
    elevation: 3,
    borderColor: 'rgba(46,91,255,0.08)',
    borderWidth: 1,
  },
});

export default CardBase;
