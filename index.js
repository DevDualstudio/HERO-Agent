/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import PushNotificationService from './app/services/PushNotificationService';

// Register background handler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  PushNotificationService.processNotification(remoteMessage, false);
});

messaging().subscribeToTopic('general');

AppRegistry.registerComponent(appName, () => App);
