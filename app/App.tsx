import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import * as eva from '@eva-design/eva';
import stripe from 'tipsi-stripe';
import SplashScreen from './screens/SplashScreen';
import {
  Provider as PaperProvider,
  DefaultTheme as DefaultPaperTheme,
} from 'react-native-paper';
import { ApplicationProvider } from '@ui-kitten/components';
import evaTheme from './config/evaTheme';
import paperTheme from './config/paperTheme';
import mappings from './config/mappings';
import { STRIPE_PK } from '@env';
import { SafeAreaView } from 'react-native-safe-area-context';
import messaging from '@react-native-firebase/messaging';
import PushNotificationService from './services/PushNotificationService';
import MainNavigator from './navigation/MainNavigator';
import FlashMessage from 'react-native-flash-message';

declare const global: { HermesInternal: null | {} };

stripe.setOptions({
  publishableKey: STRIPE_PK,
  merchantId: 'MERCHANT_ID', // Optional
  androidPayMode: 'test', // Android only
});

const App = () => {
  const [isShowingSplashScreen, setIsShowingSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowingSplashScreen(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      PushNotificationService.processNotification(remoteMessage, true);
    });

    messaging().onNotificationOpenedApp((remoteMessage) => {
      PushNotificationService.processNotification(remoteMessage, false);
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          PushNotificationService.processNotification(remoteMessage, false);
        }
      });

    return unsubscribe;
  }, []);

  if (isShowingSplashScreen) {
    return <SplashScreen />;
  }

  return (
    <ApplicationProvider
      {...eva}
      theme={{ ...eva.light, ...evaTheme }}
      customMapping={mappings as any}>
      <SafeAreaView style={{ flex: 1 }}>
        <PaperProvider
          theme={{
            ...DefaultPaperTheme,
            ...paperTheme,
          }}>
          <MainNavigator />
        </PaperProvider>
      </SafeAreaView>
      <FlashMessage position="top" />
    </ApplicationProvider>
  );
};

export default App;
