import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Button from '../components/Button';
import RoutesEnum from '../shared/RoutesEnum';
import { Colors, Screens, Texts } from '../styles';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShieldPowerCloudSvg from '../components/svgs/ShieldPowerBlackSvg';

const SLIDER_WIDTH = Dimensions.get('window').width;

const Tutorial = (): JSX.Element => {
  const navigation = useNavigation();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    requestUserPermission();
  }, []);

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      await AsyncStorage.setItem('fcmToken', await messaging().getToken());
    }
  };

  const exampleScreen = () => (
    <View style={styles.tutorialItem}>
      <View style={styles.icon}>
        <ShieldPowerCloudSvg />
      </View>
      <Text style={styles.title}>Quick & Easy</Text>
      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley.
      </Text>
    </View>
  );

  const tutorialScreens = [exampleScreen, exampleScreen];

  return (
    <View style={styles.screen}>
      <View style={styles.carouselContainer}>
        <Carousel
          onSnapToItem={(index) => setActiveSlide(index)}
          data={tutorialScreens}
          renderItem={({ item: Screen }: { item: React.FC }) => {
            return <Screen />;
          }}
          sliderWidth={SLIDER_WIDTH - 30}
          itemWidth={SLIDER_WIDTH - 30}
          contentContainerCustomStyle={styles.carouselContentContainer}
        />
        <Pagination
          dotsLength={tutorialScreens.length}
          activeDotIndex={activeSlide}
          dotStyle={styles.paginationDot}
          inactiveDotScale={1}
          inactiveDotStyle={styles.paginationDotInactive}
        />
      </View>

      <Button onPress={() => navigation.navigate(RoutesEnum.WORK_AREA)}>
        Get Started!
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...Screens.base,
    ...Screens.topAndBottomContent,
  },
  carouselContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  carouselContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tutorialItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...Texts.h2,
    marginBottom: 15,
  },
  icon: {
    marginBottom: 30,
    width: 202,
  },
  description: {
    ...Texts.p,
    paddingHorizontal: 12,
  },
  paginationDot: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: Colors.heroic,
  },
  paginationDotInactive: {
    backgroundColor: '#E5E5E5',
  },
});
export default Tutorial;
