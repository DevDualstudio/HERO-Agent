import React from 'react';
import { Text, View } from 'react-native';

interface ScreenHeaderProps {
  title: string;
}

const ScreenHeader = ({ title }: ScreenHeaderProps): JSX.Element => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
export default ScreenHeader;
