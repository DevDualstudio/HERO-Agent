import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { ViewStyle } from 'react-native-phone-input';

interface LoadingIndicatorProps {}

const CardBase: React.FC<LoadingIndicatorProps> = ({}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    opacity: 0.8,
    zIndex: 2000,
  },
});

export default CardBase;
