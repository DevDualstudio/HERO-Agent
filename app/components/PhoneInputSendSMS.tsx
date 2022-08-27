import { Input } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { fontSize } from '../styles/typography';
import Button from './Button';

interface PhoneInputSendSmsProps {
  onSend: () => void;
  onChangePhone: (newValue: string) => void;
  phoneNumber: string;
  isLoading: boolean;
}

const PhoneInputSendSms: React.FC<PhoneInputSendSmsProps> = ({
  onSend,
  onChangePhone,
  phoneNumber,
  isLoading,
}) => {
  return (
    <View style={styles.phoneCard}>
      <Input
        style={styles.input}
        value={phoneNumber}
        label="Phone number"
        placeholder="+1 202 555 5555"
        onChangeText={onChangePhone}
        keyboardType="phone-pad"
      />
      <Button
        style={styles.button}
        textStyles={styles.buttonText}
        loading={isLoading}
        onPress={onSend}
        disabled={!phoneNumber}>
        Send SMS
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  phoneCard: {
    paddingVertical: 12,
    paddingLeft: 10,
    paddingRight: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
  },
  button: {
    width: 140,
  },
  buttonText: {
    ...fontSize.x14,
  },
  input: {
    marginRight: 15,
    flexGrow: 1,
    marginBottom: 0,
  },
});

export default PhoneInputSendSms;
