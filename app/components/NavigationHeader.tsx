import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Typography } from '../styles';
import CardBase from './CardBase';
import BackSvg from './svgs/BackSvg';

interface NavigationHeaderProps {
  noShadowToggle?: boolean;
  allowSkip?: boolean;
  onSkip?: () => void;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  noShadowToggle = false,
  allowSkip = false,
  onSkip,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <View>
          <CardBase style={styles.iconCard} noShadow={noShadowToggle}>
            <BackSvg />
          </CardBase>
        </View>
      </Pressable>
      {allowSkip && (
        <Pressable onPress={onSkip}>
          <View>
            <Text style={styles.skipText}>SKIP</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  iconCard: {
    width: 48,
    height: 48,
  },
  skipText: {
    ...Typography.fontFamily.Demi,
    ...Typography.fontSize.x18,
    color: '#9FB5C4',
  },
});
export default NavigationHeader;
