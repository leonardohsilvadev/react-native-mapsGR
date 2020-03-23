import React , {useEffect, useState} from 'react';
import { Markers } from './components/Markers';
import { Perimeters } from './components/Perimeters';
import { View } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Alert, StyleSheet, Dimensions } from 'react-native';
import {api} from '../../utils/api'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

export function HomeScreen() {
  
  useEffect(() => {
    getNavios();
  }, [])

  const [navios, setNavios] = useState()
  const [coordenadas, setCoordenadas] = useState([
    {name: '2', latitude: -23.979875, longitude:-46.289173}, {name: '1', latitude: -23.979816, longitude: -46.291029},
    {name: '3', latitude: -23.982210, longitude: -46.291282}, {name: '4', latitude: -23.982214, longitude:-46.289140},
  ])

  function getNavios() {  
    let url = '/api/Navios/getMarineTraffic'
    
    api('').get(url)
    .then(({ data }) => {
      setNavios(data)
    })
    .catch(err => console.log('Erro ao buscar Navios', err));
  }

  return (
    <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        latitude: -23.981225, 
        longitude: -46.291127,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}      
      maxZoomLevel={20} // default => 20
      enableZoomControl={true}
      zoomEnabled = {true}
    >
      <Perimeters
          coordenadas={coordenadas}
      />
      <Markers
        navios={navios}
      />
    </MapView>      
  </View>
  )
}
