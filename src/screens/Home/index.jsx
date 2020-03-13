import React , {useEffect, useState} from 'react';
import {HomeList} from './components/HomeList';
import { View } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Alert, StyleSheet, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';
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

  const [navios, setNavios] = useState('')

  function getNavios() {  
    let url = '/api/Navios/getMarineTraffic'
    
    api('').get(url)
    .then(({ data }) => {
      setNavios(data)
    })
    .catch(err => console.log('Erro ao buscar Navios', err));
  }

  console.log(navios)

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
    >
      {navios && navios.map(navio => (
        <View>
        <Marker
          coordinate={{
            latitude: navio.latitude,
            longitude: navio.longitude,
          }}
          title={navio.name}
          description={`
            Tipo do navio: 
          `}
        />
        </View>
      ))}
    </MapView>      
  </View>
  )
}
