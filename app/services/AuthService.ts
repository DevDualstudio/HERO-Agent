import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiRoutesEnum from '../shared/ApiRoutesEnum';
import { User } from '../types/User';
import ApiService from './ApiService';

class AuthService {
  static sendVerificationCode(phoneNumber: string) {
    return ApiService.post({
      url: ApiRoutesEnum.SEND_VERIFICATION_CODE,
      body: { phoneNumber },
    });
  }

  static async login(phoneNumber: string, verificationCode: string) {
    interface ApiLoginPhoneCodeDto {
      type: string;
      token: string;
      user: User;
    }

    const response = await ApiService.post<ApiLoginPhoneCodeDto>({
      url: ApiRoutesEnum.LOGIN_PHONE_CODE,
      body: { phoneNumber, code: verificationCode },
    });
    await this.setToken(response.token);
    await this.setActiveUser(response.user);
    console.log('token', response.token);
    console.log('userFromServer', response.user);
  }

  static async setToken(token: string) {
    await AsyncStorage.setItem('authToken', token);
  }
  static async getToken() {
    const token = await AsyncStorage.getItem('authToken');
    return token;
  }
  static async setActiveUser(user: User) {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  }
  static async getActiveUser() {
    const userString = await AsyncStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }
  static async logout() {
    await AsyncStorage.removeItem('authToken');
    await AsyncStorage.removeItem('user');
  }
}
export default AuthService;
