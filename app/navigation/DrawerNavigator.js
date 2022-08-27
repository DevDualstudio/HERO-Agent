import React, { Component } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RequestService, CreditCardList, AddCreditCard } from '../screens';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens, Texts, S, Colors } from '../styles';
import ScreenBackground from '../components/ScreenBackground';
import BgDots2Svg from '../components/svgs/BgDots2Svg';
import BgCircleSvg from '../components/svgs/BgCircleSvg';
import CardBase from '../components/CardBase';
import BackSvg from '../components/svgs/BackSvg';
import { Home } from '../components/svgs/menu';

import { TouchableOpacity } from 'react-native-gesture-handler';
import RoutesEnum from '../shared/RoutesEnum';
import Button from '../components/Button';
import AuthService from '../services/AuthService';
import { fontFamily, fontSize } from '../styles/typography';
import Insured from '../components/svgs/Insured';

const PaymentsStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="PaymentMethods">
      <Stack.Screen name="PaymentMethods" component={CreditCardList} />
      <Stack.Screen name="AddPaymentMethod" component={AddCreditCard} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={[S.flex1]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[S.mt20, S.mb15, S.ml15]}
        onPress={() => {
          navigation.closeDrawer();
        }}>
        <CardBase style={styles.iconCard}>
          <BackSvg />
        </CardBase>
      </TouchableOpacity>
      <DrawerItemList {...props} />
      <View
        style={[
          S.pl15,
          S.pr15,
          S.mt20,
          { position: 'absolute', bottom: 30, width: '100%' },
        ]}>
        <Button
          onPress={async () => {
            await AuthService.logout();
            navigation.navigate(RoutesEnum.INITIAL);
          }}>
          Log out
        </Button>
      </View>
      <ScreenBackground>
        <BgDots2Svg style={styles.bgDots2} />
        <BgCircleSvg style={styles.bgCircle} />
      </ScreenBackground>
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerType="front"
      drawerContentOptions={{
        activeTintColor: Colors.secondary,
        activeBackgroundColor: 'transparent',
        inactiveTintColor: Colors.secondary,
        inactiveBackgroundColor: 'transparent',
        labelStyle: styles.text,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{ width: '100%' }}>
      <Drawer.Screen
        name="Request Service"
        component={RequestService}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, size }) => (
            <View style={[S.ml10]}>
              <Home></Home>
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  bgDots2: {
    position: 'absolute',
    zIndex: -5,
    top: 50,
    left: 205,
  },
  bgCircle: {
    position: 'absolute',
    zIndex: -5,
    top: 30,
    left: 250,
  },
  iconCard: {
    width: 48,
    height: 48,
  },
  bottom: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  text: {
    ...fontSize.x20,
    ...fontFamily.ExtraBoldO,
    marginLeft: -15,
  },
});

export default DrawerNavigator;
