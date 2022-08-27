import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LocationCompassButton from '../components/LocationCompassButton';
import NavMenu from '../components/NavMenu';
import { fontFamily, fontSize } from '../styles/typography';
import MapView from 'react-native-maps';
import { S } from '../styles';
import SwipeButton from 'rn-swipe-button';
import ShieldPowerIcon from '../components/svgs/ShieldPowerIcon';
import LoadingIndicator from '../components/LoadingIndicator';
import AgentService from '../services/AgentService';

const RequestService = () => {
  const navigation = useNavigation();
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAvailableResponse = async () => {
    try {
      setIsLoading(true);
      const availableResponse = await AgentService.isAvailable();
      setIsOnline(availableResponse.isAvailable);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const setIsAvailable = async (isAvailable: boolean) => {
    try {
      await AgentService.toggleAvailability(isAvailable);
      setIsOnline(isAvailable);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    getAvailableResponse();
  }, []);

  return (
    <View style={[styles.container, S.flex1]}>
      <View
        style={{
          position: 'absolute',
          top: 15,
          zIndex: 1000,
          width: '100%',
          padding: 10,
        }}>
        <View style={styles.locationCompassButton}>
          <SwipeButton
            disabled={false}
            height={40}
            onSwipeSuccess={() => {
              setIsAvailable(true);
            }}
            onSwipeFail={() => {
              console.log('TEST');
              setIsAvailable(false);
            }}
            railBackgroundColor={isOnline ? '#3300F5' : '#FFF'}
            railBorderColor="#3300F5"
            railFillBorderColor="#3300F5"
            // railFillBorderColor="#3300F5"
            // railFillBackgroundColor="#3300F5"
            railStyles={{
              backgroundColor: '#3300F5',
              borderColor: '#3300F5',
              opacity: 1,
            }}
            titleStyles={{ zIndex: 1000, ...fontFamily.Bold }}
            titleFontSize={15}
            enableRightToLeftSwipe={true}
            thumbIconBorderColor="#3300F5"
            titleColor={isOnline ? '#FFF' : '#000'}
            disabledRailBackgroundColor="blue"
            title={isOnline ? 'Online    ' : '      Offline'}
            width={160}
            thumbIconComponent={ShieldPowerIcon}
            swipeToEnd={isOnline}
          />
        </View>

        <NavMenu navigation={navigation} />
        <LocationCompassButton style={[styles.locationCompassButton, S.mt10]} />
      </View>

      <MapView
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      {isLoading && <LoadingIndicator />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  locationCompassButton: {
    alignSelf: 'flex-end',
  },
  bottomPanel: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 30,
    marginTop: -15,
  },
  input: {
    backgroundColor: '#F4F5F8',
    ...fontSize.x26,
    marginBottom: 50,
  },
});

export default RequestService;
