import React from 'react';
import { SafeAreaView, Text, Image } from 'react-native';
import { Button, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Polygon } from 'react-native-maps';

export const Perimeters = ({coordenadas}) => {
  const navigation = useNavigation();

  return (
    <View>
        <Polygon
            coordinates={coordenadas}
            fillColor={'rgba(255, 165, 0, 0.5)'}
            strokeColor={'orange'}
            strokeWidth={3}
        />
    </View>
)};
