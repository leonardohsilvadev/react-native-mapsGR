import React from 'react';
import 'react-native-gesture-handler';
import { View, Text,} from 'native-base';
import { Styles } from '../config/styles';
import { SafeAreaView } from 'react-native';

export const Hr = props => {

    return (
        <SafeAreaView>
            <View style={Styles.hr}></View>
        </SafeAreaView>
    )
}