import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ViewStyle } from 'react-native-phone-input';
import { fontFamily } from '../styles/typography';

interface CodeInputDisplayProps {
  style?: ViewStyle;
  code: string;
  onPress: () => void;
}

const CodeInputDisplay: React.FC<CodeInputDisplayProps> = ({
  code,
  style = {},
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, style]}>
        <View style={styles.codeNumber}>
          <Text style={styles.codeNumberText}>{code[0] || ''}</Text>
        </View>
        <View style={styles.codeNumber}>
          <Text style={styles.codeNumberText}>{code[1] || ''}</Text>
        </View>
        <View style={styles.codeNumber}>
          <Text style={styles.codeNumberText}>{code[2] || ''}</Text>
        </View>
        <View style={styles.codeNumber}>
          <Text style={styles.codeNumberText}>{code[3] || ''}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  codeNumber: {
    backgroundColor: '#F3F3FA',
    width: 40,
    height: 40,
    marginHorizontal: 4,

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#2e5bff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.07,
    shadowRadius: 2.22,
    elevation: 3,
  },
  codeNumberText: {
    fontSize: 26,
    ...fontFamily.Demi,
  },
});

export default CodeInputDisplay;
