import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import CardBase from './CardBase';
import CameraSvg from './svgs/CameraSvg';
import {
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';
import { File } from '../shared/File';
import { fontFamily } from '../styles/typography';

interface ImageUploadProps {
  onSelectedPhoto: (file: File | undefined) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onSelectedPhoto }) => {
  const [profileImage, setProfileImage] = useState<File>();

  const pickPhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.7,
        maxWidth: 1024,
        maxHeight: 1024,
      },
      handlePhotoSelect,
    );
  };

  const handlePhotoSelect = (response: ImagePickerResponse) => {
    if (!response.didCancel && !response.errorCode) {
      const newImage = {
        name: response.fileName!,
        type: response.type!,
        uri: response.uri!,
      };
      setProfileImage(newImage);
      onSelectedPhoto(newImage);
    }
  };

  const removeImage = () => {
    setProfileImage(undefined);
    onSelectedPhoto(undefined);
  };

  return (
    <View style={styles.container}>
      {!profileImage && (
        <Pressable onPress={pickPhoto}>
          <View style={styles.inner}>
            <Text style={[styles.text, { marginTop: 15 }]}>+</Text>
            <View style={styles.bottom}>
              <CameraSvg />
            </View>
          </View>
        </Pressable>
      )}
      {profileImage && (
        <View style={styles.imageContainer}>
          <View style={[styles.closeContainer]}>
            <Pressable onPress={removeImage}>
              <Text style={styles.close}>X</Text>
            </Pressable>
          </View>
          <Image source={{ uri: profileImage?.uri }} style={styles.image} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },

  inner: {
    width: '100%',
    height: 100,
    borderColor: '#ccc',
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    ...fontFamily.Book,
    fontSize: 48,
    textAlign: 'center',
    flexGrow: 1,
  },
  bottom: {
    height: 30,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 100,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  closeContainer: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 20,
    height: 20,
    zIndex: 100,
    justifyContent: 'center',

    shadowColor: '#2e5bff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.07,
    shadowRadius: 2.22,
    elevation: 3,
    borderColor: 'rgba(46,91,255,0.08)',
    borderWidth: 1,
  },
  close: {
    textAlign: 'center',
    ...fontFamily.Demi,
    lineHeight: 18,
  },
});

export default ImageUpload;
