import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Texts } from '../styles';
import { PaymentCardTextField } from 'tipsi-stripe';
import testID from '../shared/testID';
import { CreditCardParams } from '../types/CreditCardParams';
import CreditCardPlaceholderSvg from './svgs/CreditCardPlaceholderSvg';
import { fontFamily } from '../styles/typography';

interface CardBaseProps {
  onParamsChange: (valid: boolean, params: CreditCardParams) => void;
  params: CreditCardParams;
}

const AddCreditCard: React.FC<CardBaseProps> = ({ onParamsChange, params }) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.creditCardPlaceholder}>
          <CreditCardPlaceholderSvg />
          <Text style={styles.ccNumberDisplay}>
            {params && params.number
              ? params.number
                  .toString()
                  .match(/.{1,4}/g)
                  .join(' ')
              : 'XXXX XXXX XXXX XXXX'}
          </Text>
        </View>
      </View>
      <View style={styles.creditCardInputWrapper}>
        <PaymentCardTextField
          accessible={false}
          style={styles.field}
          onParamsChange={onParamsChange}
          numberPlaceholder="XXXX XXXX XXXX XXXX"
          expirationPlaceholder="MM/YY"
          cvcPlaceholder="CVC"
          {...testID('cardTextField')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  title: {
    ...Texts.h2,
    textAlign: 'center',
    marginBottom: 10,
  },
  field: {
    width: '100%',
    color: '#449aeb',
    backgroundColor: '#FFFFFF',
  },
  creditCardInputWrapper: {
    borderBottomColor: '#C3C5D3',
    borderBottomWidth: 1,
  },
  creditCardPlaceholder: {
    alignItems: 'center',
    marginBottom: 30,
    position: 'relative',
    width: 302,
  },
  ccNumberDisplay: {
    ...fontFamily.Demi,
    position: 'absolute',
    bottom: 40,
    left: 25,
    fontSize: 18,
    letterSpacing: 1.4,
  },
});
export default AddCreditCard;
