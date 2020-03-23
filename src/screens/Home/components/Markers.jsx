import React from 'react';
import { SafeAreaView, Text, Image } from 'react-native';
import { View } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Marker, Callout } from 'react-native-maps';
import { Styles } from '../styles';

export const Markers = ({navios}) => {
  const navigation = useNavigation();

  return (
    <View>
      {navios && navios.map(navio => (
      <View>
        <Marker
          coordinate={{
            latitude: navio.latitude,
            longitude: navio.longitude,
          }}          
        >
          <Image source={require('../../../assets/ship-icon.png')} style={{width: 30, height: 50}}/>
          <Callout style={Styles.box}>
            <Text>
            {navio.name}
            </Text>
            <Text>
            Tipo do navio: {navio.type}
            </Text>
            <Text>
              Velocidade do navio: {navio.speed}
            </Text>
            <Text>
              Largura do navio: {navio.width}
            </Text>
            <Text>
              Comprimento do navio: {navio.length}
            </Text>
          </Callout>
        </Marker>
      </View>
      ))}
    </View>
)};
