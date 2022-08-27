import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Texts, S } from '../styles';
import { State } from '../types/State';
import { Zone } from '../types/Zone';
import CheckBox from '@react-native-community/checkbox';

interface WorkStateZonesProps {
  updateZoneSelection: (zone: Zone, state: State, isSelected: boolean) => void;
  updateStateSelection: (state: State, isSelected: boolean) => void;
  states: State[];
  selectedStates: number[];
  selectedZones: string[];
}

const WorkStateZones: React.FC<WorkStateZonesProps> = ({
  updateZoneSelection,
  updateStateSelection,
  states,
  selectedStates,
  selectedZones,
}) => {
  return (
    <View>
      {states.map((s: State) => {
        return (
          <View>
            <View style={[S.row, S.centerX]}>
              <CheckBox
                disabled={false}
                value={selectedStates.includes(s.id)}
                onValueChange={(newValue) => updateStateSelection(s, newValue)}
              />
              <Text style={[S.ml10, Texts.h3]}>{s.name}</Text>
            </View>
            <View style={[S.mt15, S.ml30]}>
              {s.zones.map((z: Zone) => {
                return (
                  <View style={[S.row, S.centerX]}>
                    <CheckBox
                      disabled={false}
                      value={selectedZones.includes(z.id)}
                      onValueChange={(newValue) =>
                        updateZoneSelection(z, s, newValue)
                      }
                    />
                    <Text style={[S.ml10, Texts.h3]}>{z.name}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({});
export default WorkStateZones;
