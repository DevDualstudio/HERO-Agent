import { Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CardBase from './CardBase';
import StarSvg from './svgs/StarSvg';

const MapFavorites = () => {
  const exampleFavorites = [
    'Yellowstone',
    'Bryce Canyon Nat..',
    'Statue of Liberty',
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View style={styles.buttonList}>
          {exampleFavorites.map((favoriteTitle) => (
            <CardBase style={styles.button}>
              <StarSvg width={16} height={16} style={styles.favoriteIcon} />
              <Text style={styles.text}>{favoriteTitle}</Text>
            </CardBase>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    zIndex: 1000,
    marginLeft: -15,
    marginRight: -15,
  },
  buttonList: {
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  button: {
    zIndex: 1500,
    paddingLeft: 10,
    paddingRight: 15,
    paddingVertical: 20,
    marginRight: 10,
    flexDirection: 'row',
  },
  favoriteIcon: {
    marginRight: 10,
  },
  text: {},
});

export default MapFavorites;
