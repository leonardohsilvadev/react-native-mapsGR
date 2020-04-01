import React, {useState} from 'react';
import { View, Text, Left, Icon, Card,} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { style, StylesAccordion } from '../styles'
import { COLOR } from '../../../config/styles';

export const HoraAlturaMares = ({altura, hora, index}) => {
    let cardOddorEven = {};

    if(index % 2){
        cardOddorEven = {
            start: { x: 0, y: 2 },
            end: { x: 1, y: 2 },
            colors: [COLOR.MARE_LAST, COLOR.MARE_INITIAL],
            style: style.lineMares
        };  
    } else {
        cardOddorEven = {
            start: { x: 1, y: 0 },
            end: { x: 0, y: 0 },
            colors: [COLOR.MARE_LAST, COLOR.MARE_INITIAL],
            style: style.lineMares
        };
    }

  return (
    <View> 
        <LinearGradient {...cardOddorEven}>
            <View style={StylesAccordion.viewInfo}>
                <Text style={StylesAccordion.itemTitle}>Hora </Text>
                <Text style={StylesAccordion.itemInfo}>{hora}</Text>
                <View style={style.divider}><Text></Text></View>
                <Text style={StylesAccordion.itemTitle}>Altura </Text>
                <Text style={StylesAccordion.itemInfo}>{altura.toFixed(1)}</Text>
            </View>          
        </LinearGradient>
    </View>
)};
