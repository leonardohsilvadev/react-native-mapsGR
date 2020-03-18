import React from 'react';
import 'react-native-gesture-handler';
import { Icon, Thumbnail, Header as Navbar, Left, Body, Right } from 'native-base';
import { COLOR, Styles } from '../config/styles';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import MultiTapComponent from 'react-native-multi-tap-component';
import { version } from '../../package-lock.json';
import LinearGradient from 'react-native-linear-gradient';

const gradientProps = {
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    colors: [COLOR.MAIN, COLOR.ACCENT]
};

export const Header = () => {
    const navigation = useNavigation();

    const showAlert = tapCount => {
        if (tapCount > 10) {
          Alert.alert('Monitoramento de Navios ModalGR', `v ${version}`, [
            { text: 'OK' },
          ]);
        }
    };

    return (
        <LinearGradient {...gradientProps}>
            <Navbar style={Styles.headerStyle} transparent androidStatusBarColor={COLOR.ACCENT}>
                <Left style={Styles.logoLeft}>
                        <Icon
                            name="md-menu"
                            type="Ionicons"
                            style={Styles.menuIcon}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        />
                </Left>
                <Body style={Styles.logoMiddle}>
                    <MultiTapComponent onPress={showAlert}>
                        <Thumbnail
                            source={require('../assets/logo-modal-white.png')}
                            style={Styles.logoModal}
                            square
                        />
                    </MultiTapComponent>
                </Body>
                <Right style={Styles.logoRight}>
                    <Icon
                        name="md-menu"
                        type="Ionicons"
                        onPress={() => {}}
                    />
                </Right>
            </Navbar>
        </LinearGradient>
    )
}