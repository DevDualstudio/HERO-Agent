import { NavigationContainer } from '@react-navigation/native';
import RoutesEnum, { RootStackParamList } from '../shared/RoutesEnum';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { InitialScreen, SignUpLogin, WorkArea, Tutorial } from '../screens';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RoutesEnum.INITIAL}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={RoutesEnum.INITIAL} component={InitialScreen} />
        <Stack.Screen name={RoutesEnum.SIGN_UP_LOGIN} component={SignUpLogin} />
        <Stack.Screen name={RoutesEnum.MAIN} component={DrawerNavigator} />
        <Stack.Screen name={RoutesEnum.WORK_AREA} component={WorkArea} />
        <Stack.Screen name={RoutesEnum.TUTORIAL} component={Tutorial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
