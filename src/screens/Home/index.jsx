import * as React from 'react';
import {HomeList} from './components/HomeList';
import { View } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Alert, StyleSheet, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get('window').height,
    height: Dimensions.get('window').width,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });
export function HomeScreen() {
  return (
    <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        latitude: -23.9591226,
        longitude: -46.3311974,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
    <Marker
      title="ModalGR"
      description="ModalGR no Maps"
      coordinate={{latitude: -23.9591226, longitude: -46.3311974}}
      onPress={() => Alert.alert('Pedrinho Baitola')}
    />
    </MapView>

    
  </View>
  )
}
