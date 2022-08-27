import { Component } from 'react';
import ApiRoutesEnum from '../shared/ApiRoutesEnum';
import { PaymentMethod } from '../types/PaymentMethod';
import ApiService from './ApiService';
import {
  Amex,
  ApplePay,
  Default,
  Mastercard,
  Visa,
} from '../components/svgs/card';

export default class PaymentMethodService {
  static async get(): Promise<PaymentMethod[]> {
    const response: any = await ApiService.get({
      url: ApiRoutesEnum.PAYMENT_METHOD,
    });
    return response;
  }

  static async save(tokenId: string): Promise<void> {
    await ApiService.post({
      url: ApiRoutesEnum.PAYMENT_METHOD + '/save-credit-card',
      body: {
        token: tokenId,
      },
    });
  }

  static async savePreferred(paymentMethodId: string): Promise<void> {
    await ApiService.put({
      url:
        ApiRoutesEnum.PAYMENT_METHOD + '/preferred-method/' + paymentMethodId,
    });
  }

  static async delete(paymentMethodId: string): Promise<void> {
    await ApiService.delete({
      url: ApiRoutesEnum.PAYMENT_METHOD + '/' + paymentMethodId,
    });
  }

  static getCardLogo(brand: string): Element {
    const brandName = brand.toUpperCase();

    switch (brandName) {
      case 'VISA':
        return Visa(null);
      case 'MASTERCARD':
        return Mastercard(null);
      case 'AMEX':
        return Amex(null);
      case 'APPLEPAY':
        return ApplePay(null);
      default:
        return Default(null);
    }
  }
}
