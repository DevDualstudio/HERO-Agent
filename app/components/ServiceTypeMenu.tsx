import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../styles';
import { fontFamily, fontSize } from '../styles/typography';
import ShieldPartySvg from './svgs/ShieldPartySvg';
import ShieldPowerIcon from './svgs/ShieldPowerIcon';
import ShieldTimeSvg from './svgs/ShiledTimeSvg';

const ServiceTypeMenu = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <View style={styles.service}>
          <View style={[styles.icon, styles.heroIcon]}>
            <ShieldPowerIcon />
          </View>
          <Text style={styles.text}>Hero</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.service}>
          <View style={styles.icon}>
            <ShieldTimeSvg />
          </View>
          <Text style={styles.text}>Reserve</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.service}>
          <View style={styles.icon}>
            <ShieldPartySvg />
          </View>
          <Text style={styles.text}>Event</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  service: {},
  icon: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'rgba(46,91,255,0.08)',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroIcon: {
    backgroundColor: Colors.secondary,
  },
  text: {
    ...fontFamily.Medium,
    ...fontSize.x18,
    textAlign: 'center',
  },
});
export default ServiceTypeMenu;
