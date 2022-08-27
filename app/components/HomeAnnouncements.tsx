import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fontFamily, fontSize } from '../styles/typography';
import Button from './Button';

const HomeAnnouncements = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beta phase</Text>
      <Text style={styles.description}>
        This application is in its version 0.1
      </Text>
      <Button style={styles.button} textStyles={styles.buttonText}>
        Learn more
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: '#F4F5F8',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 45,
  },
  title: {
    ...fontFamily.Demi,
    ...fontSize.x28,
  },
  description: {
    ...fontFamily.Demi,
    ...fontSize.x16,
    marginBottom: 10,
  },
  button: {
    width: 110,
    height: 30,
    minHeight: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 25,
  },
  buttonText: {
    ...fontSize.x14,
    ...fontFamily.Medium,
    lineHeight: 16,
  },
});
export default HomeAnnouncements;
