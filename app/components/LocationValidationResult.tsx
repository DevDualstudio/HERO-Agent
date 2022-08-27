import React from 'react';

import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import CardBase from '../components/CardBase';
import SvgIconLocationValidated from '../components/svgs/ValidLocationSvg';
import { fontFamily, fontSize } from '../styles/typography';

interface LocationValidationResultProps {
  style?: ViewStyle;
}

const LocationValidationResult = ({
  style,
}: LocationValidationResultProps): JSX.Element => {
  return (
    <CardBase style={[styles.card, style]}>
      <View style={styles.icon}>
        <SvgIconLocationValidated />
      </View>
      <Text style={styles.text}>Available in your area</Text>
    </CardBase>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 20,
  },
  text: {
    ...fontSize.x18,
    ...fontFamily.Medium,
  },
});
export default LocationValidationResult;
