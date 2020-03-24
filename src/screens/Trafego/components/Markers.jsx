import React from 'react';
import { SafeAreaView, Text, Image } from 'react-native';
import { View } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Marker, Callout } from 'react-native-maps';
import { Styles } from '../styles';
import { scale } from 'react-native-size-matters';
import moment from 'moment'

export const Markers = ({trafegoNavio}) => {
  const navigation = useNavigation();

  return (
    <View>
      {trafegoNavio && trafegoNavio.map(coordenada => (
      <View>
        <Marker
          coordinate={{
            latitude: coordenada.latitude,
            longitude: coordenada.longitude,
          }}          
        >
          <Image source={require('../../../assets/ship-icon.png')} style={{width: 20, height: 40}}/>
          <Callout style={{width: scale(100), justifyContent: 'center'}}>
            <Text style={{textAlign: 'center'}}>
              Horário: {moment(coordenada.data).format('HH:mm')}
            </Text>
          </Callout>
        </Marker>
      </View>
      ))}
    </View>
)};
