import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CardBase from './CardBase';
import SvgMenu from './svgs/MenuSvg';
import {} from '@react-navigation/drawer';

const NavMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <CardBase style={styles.toggle}>
          <SvgMenu />
        </CardBase>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toggle: {
    width: 48,
    height: 48,
  },
  container: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 1000,
  },
});

export default NavMenu;
