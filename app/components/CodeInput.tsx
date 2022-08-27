import { Input } from '@ui-kitten/components';
import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { fontSize } from '../styles/typography';
import Button from './Button';
import CodeInputDisplay from './CodeInputDisplay';

interface CodeInputProps {
  onSend: () => void;
  isLoading: boolean;
}

const CodeInput: React.FC<CodeInputProps> = ({ onSend, isLoading }) => {
  const [verificationCode, setVerificationCode] = useState<string>('');
  const inputRef: any = useRef();

  const send = () => {
    onSend(verificationCode);
  };

  return (
    <View style={styles.phoneCard}>
      <View style={styles.codeInputWrapper}>
        <Input
          textStyle={styles.inputText}
          style={styles.input}
          value={verificationCode}
          onChangeText={(newValue) => setVerificationCode(newValue)}
          keyboardType="phone-pad"
          autoFocus
          maxLength={4}
          ref={inputRef}
        />
        <CodeInputDisplay
          code={verificationCode}
          style={styles.codeInputDisplay}
          onPress={() => inputRef.focus()}
        />
      </View>
      <Button
        style={styles.button}
        textStyles={styles.buttonText}
        loading={isLoading}
        onPress={send}
        disabled={!verificationCode || verificationCode.length !== 4}>
        Verify
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
    alignItems: 'center',
    width: '100%',
  },
  codeInputWrapper: {
    width: 200,
    position: 'relative',
  },
  button: {
    width: 140,
  },
  buttonText: {
    ...fontSize.x14,
  },
  input: {
    height: 40,
    opacity: 0,
    position: 'absolute',
    zIndex: 100,
    width: '100%',
  },
  inputText: {
    height: 40,
  },
  codeInputDisplay: {},
});

export default CodeInput;
