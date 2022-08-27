import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardBase from './CardBase';
import SvgIconMapCurrentLocation from './svgs/CompassSvg';

const LocationCompassButton = ({ style = {} }) => {
  return (
    <View style={style}>
      <CardBase style={styles.toggle}>
        <SvgIconMapCurrentLocation />
      </CardBase>
    </View>
  );
};

const styles = StyleSheet.create({
  toggle: {
    width: 48,
    height: 48,
    zIndex: 22000,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default LocationCompassButton;
