import React from 'react';
import 'react-native-gesture-handler';
import { DrawerItemList } from '@react-navigation/drawer';
import { View, Thumbnail, Text} from 'native-base';
import { Styles } from '../config/styles';
import { SafeAreaView, ScrollView } from 'react-native';

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
        <ScrollView>
            <View style={Styles.header}>
                <Thumbnail {...logoProps} />
                <View style={Styles.avatar}>
                <Thumbnail {...avatarProps} />
                </View>
                <View style={Styles.userInfo}>
                    <View>
                        <Text style={Styles.name}>Modal GR</Text>
                        <Text style={Styles.email}>modalgr@modalgr.com.br</Text>
                    </View>
                </View>
            </View>
        <DrawerItemList {...props} />
        </ScrollView>
    </SafeAreaView>
    )
}