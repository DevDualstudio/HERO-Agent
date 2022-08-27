import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import LogoSvg from '../components/svgs/LogoSvg';
import { Colors, Typography } from '../styles';

const SplashScreen = (): JSX.Element => {
  return (
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <LogoSvg />
      </View>
      <Text style={styles.logoCaption}>Agent App</Text>

      <View style={{ position: 'absolute', bottom: 0, left: 0 }}>
        <Button
          title="DEV Delete cache"
          onPress={() => {
            AsyncStorage.clear();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: Colors.secondary,
  },
  logoContainer: {
    width: 230,
    marginBottom: 16,
  },
  logoCaption: {
    color: '#fff',
    ...Typography.fontFamily.Demi,
    ...Typography.fontSize.x26,
  },
});

export default SplashScreen;
