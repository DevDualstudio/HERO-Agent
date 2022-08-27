import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { S, Texts } from '../styles';
import RoutesEnum from '../shared/RoutesEnum';
import { fontSize } from '../styles/typography';
import ZoneService from '../services/ZoneService';
import { State } from '../types/State';
import LoadingIndicator from '../components/LoadingIndicator';
import WorkStateZones from '../components/WorkStatesZones';
import { Zone } from '../types/Zone';
import { showMessage, hideMessage } from 'react-native-flash-message';
import { UpdateWorkAreaRequest } from '../types/UpdateWorkAreaRequest';

const WorkArea = () => {
  const navigation = useNavigation();
  const [states, setStates] = useState<State[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedZones, setSelectedZones] = useState<string[]>([]);
  const [selectedStates, setSelectedStates] = useState<number[]>([]);

  useEffect(() => {
    getWorkZones();
  }, []);

  const getWorkZones = async () => {
    try {
      var result = await ZoneService.getValidStatesAndZones();
      setStates(result.list);
    } catch (error) {
      console.log(error);
      showMessage({
        message: 'Error',
        description: 'An error has occurred, please try again later',
        type: 'danger',
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const saveWorkAreas = async () => {
    console.log(selectedZones.length);
    if (selectedZones.length == 0) {
      navigation.navigate(RoutesEnum.MAIN);
    } else {
      try {
        setIsLoading(true);
        await ZoneService.setWizardComplete();
        const updateWorkAreaRequest: UpdateWorkAreaRequest = { zones: [] };
        selectedZones.forEach((s) => {
          updateWorkAreaRequest.zones.push({ zoneId: s });
        });
        await ZoneService.updateWorkAreas(updateWorkAreaRequest);
        navigation.navigate(RoutesEnum.MAIN);
      } catch (error) {
        showMessage({
          message: 'Error',
          description: 'An error has occurred, please try again later',
          type: 'danger',
          duration: 4000,
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const updateZoneSelection = (
    zone: Zone,
    state: State,
    isSelected: boolean,
  ) => {
    let zones = [...selectedZones];
    if (isSelected && !selectedZones.includes(zone.id)) {
      zones.push(zone.id);
      setSelectedZones(zones);
    } else if (!isSelected) {
      zones = selectedZones.filter((item) => item !== zone.id);
      setSelectedZones([...zones]);
    }

    // Update State
    let markState = true;
    state.zones.forEach((z) => {
      if (!zones.includes(z.id)) {
        markState = false;
      }
    });

    let states = [...selectedStates];
    if (markState) {
      if (!selectedStates.includes(state.id)) {
        states.push(state.id);
        setSelectedStates(states);
      }
    } else {
      states = states.filter((item) => item !== state.id);
      setSelectedStates([...states]);
    }
  };

  const updateStateSelection = (state: State, isSelected: boolean) => {
    let states = [...selectedStates];
    let zones = [...selectedZones];
    // Select all childs
    if (isSelected) {
      if (!states.includes(state.id)) {
        states.push(state.id);
      }
      state.zones.forEach((z) => {
        if (!zones.includes(z.id)) {
          zones.push(z.id);
        }
      });
    } else {
      // Remove state and all childs
      states = states.filter((item) => item !== state.id);
      state.zones.forEach((z) => {
        zones = zones.filter((item) => item !== z.id);
      });
    }
    setSelectedStates(states);
    setSelectedZones(zones);
  };

  return (
    <View
      style={[styles.bottomPanel, styles.container, S.spaceBetween, S.flex1]}>
      <View>
        <Text style={styles.title}>Reservation Area</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </Text>
        <View style={[S.mt15]}>
          <WorkStateZones
            updateStateSelection={updateStateSelection}
            updateZoneSelection={updateZoneSelection}
            selectedStates={selectedStates}
            selectedZones={selectedZones}
            states={states}></WorkStateZones>
        </View>
      </View>

      <View>
        <Button
          onPress={() => {
            saveWorkAreas();
          }}>
          Continue
        </Button>
      </View>
      {isLoading && <LoadingIndicator></LoadingIndicator>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  mapSection: {
    width: '100%',
    height: 400,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 20,
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
  title: {
    ...Texts.h2,
    marginBottom: 10,
  },
  description: {
    ...Texts.psmall,
  },
});

export default WorkArea;
