import React, { useEffect, useRef } from 'react';
import { Animated, Keyboard, StyleSheet, View } from 'react-native';

const ScreenBackground: React.FC = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const _keyboardDidShow = () => {
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 0,
      duration: 200,
    }).start();
  };
  const _keyboardDidHide = () => {
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration: 200,
    }).start();
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
    // Keyboard.addListener('keyboardWillShow', _keyboardDidShow);
    // Keyboard.addListener('keyboardWillHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
      // Keyboard.removeListener('keyboardWillShow', _keyboardDidShow);
      // Keyboard.removeListener('keyboardWillHide', _keyboardDidHide);
    };
  }, []);

  return (
    <Animated.View style={[styles.background, { opacity: fadeAnim }]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
});

export default ScreenBackground;
