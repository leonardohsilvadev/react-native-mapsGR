import React from 'react';
import 'react-native-gesture-handler';
import { DrawerItemList } from '@react-navigation/drawer';
import { View, Thumbnail, Text} from 'native-base';
import { Styles } from '../config/styles';
import { SafeAreaView, ScrollView } from 'react-native';
import { COLOR } from '../config/styles';

const logoProps = {
    style: Styles.logo,
    source: require('../assets/logo-modal.png'),
    square: true,
};

const avatarProps = {
    source: require('../assets/logo-modal.png'),
    square: true
};

export const Drawer = props => {

    return (
    <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={Styles.container}>
            <View style={Styles.header}>
                <View style={Styles.userInfo}>
                    <View>
                        <Text style={Styles.title}>MENU</Text>
                    </View>
                </View>
            </View>
        <DrawerItemList {...props} labelStyle={Styles.navList}/>
        </ScrollView>
    </SafeAreaView>
    )
}