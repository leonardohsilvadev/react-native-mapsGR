import React from 'react';
import { SafeAreaView, Text, Image } from 'react-native';
import { Button, View } from 'native-base';
import { Polyline } from 'react-native-maps';

export const Lines = ({trafegoNavio}) => {    
    let coordenadas = []
    trafegoNavio && trafegoNavio.map(navio => {
        coordenadas.push({latitude: navio.latitude, longitude: navio.longitude})
    })
    
 
    return (
        <View>
            <Polyline
                coordinates={coordenadas}
                fillColor={'rgba(255, 165, 0, 0.5)'}
                strokeColor={'orange'}
                strokeWidth={3}
            />
        </View>
)};
