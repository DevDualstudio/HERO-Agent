import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import GoogleMapsService, {
  autoCompleteResult,
} from '../services/GoogleMapsService';

interface GooglePlacesInputProps extends TextInputProps {
  onSuggestions: (sugestions: autoCompleteResult[]) => void;
}

const GooglePlacesInput: React.FC<GooglePlacesInputProps> = ({
  onSuggestions,
  ...props
}) => {
  const getAddresses = async (text: string) => {
    if (text.length < 3) {
      return [];
    }

    const results = await GoogleMapsService.autoCompleteResults(text);

    return results;
  };

  const onChangeText = async (text: string) => {
    const autocompleteSuggestions = await getAddresses(text);
    console.log('autocompleteSuggestions', autocompleteSuggestions);

    onSuggestions(
      autocompleteSuggestions.map((res) => ({
        description: res.description,
        placeId: res.place_id,
      })),
    );
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} onChangeText={onChangeText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F4F5F8',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
export default GooglePlacesInput;
