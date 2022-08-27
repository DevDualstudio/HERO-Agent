import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

class PushNotificationService {
  public static async processNotification(
    fcmMessage: FirebaseMessagingTypes.RemoteMessage,
    isForeground: boolean,
  ) {
    // This means that app is open a push notification tile has not been displayed on top of the phone so we can let the user know
    // here that something happened as he is currently viewing the app
    if (isForeground) {
    }

    const msg = JSON.stringify(fcmMessage);
    Alert.alert('A new FCM message arrived!', msg);
  }
}

export default PushNotificationService;
