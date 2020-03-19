import React from 'react';
import { View, Text, Card, Icon } from 'native-base';
import { verticalScale, scale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR } from '../../../config/styles';
import { Styles } from '../styles';

const gradientProps = {
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    colors: [COLOR.SECONDARY, COLOR.SECONDARY_ACCENT],
    style: Styles.gradient
};

export const Accordion = ({ title, expanded, onPress, startDate, endDate, shipVelocity, shipName, message }) => {
    return (
        <LinearGradient {...gradientProps}>
        <TouchableOpacity style={{ height: expanded ? scale(140) : scale(40), paddingHorizontal: scale(20) }} onPress={onPress}>
        <Card transparent>
            <View style={{ flexDirection: 'row' }}>
                <Icon name="bell" type="MaterialCommunityIcons" style={Styles.bellIcon} />
                <Text style={Styles.accordionTitle}>{title}</Text>
                <Icon name="alarm-light" type="MaterialCommunityIcons" style={Styles.alarmIcon} />
                <Icon name= {expanded ? "md-arrow-dropup-circle" : "md-arrow-dropdown-circle"} type="Ionicons" style={Styles.upDownIcon} />
            </View>

            <View style={Styles.viewInfo}>
            <Icon name="play" type="MaterialCommunityIcons" style={Styles.playIcon} />
            <Text style={Styles.itemTitle}>Início: </Text>
            <Text style={Styles.startDate}>{startDate}</Text>
            <Icon name="stop" type="MaterialCommunityIcons" style={Styles.stopIcon} />
            <Text style={Styles.itemTitle}>Fim: </Text>
            <Text style={Styles.endDate}>{endDate}</Text>
            </View>

            <View style={Styles.viewInfo}>
            <Icon name="clock-outline" type="MaterialCommunityIcons" style={Styles.clockIcon} />
            <Text style={Styles.itemTitle}>Velocidade: </Text>
            <Text style={Styles.shipVelocity}>{shipVelocity}</Text>
            <Icon name="ship" type="FontAwesome5" style={Styles.shipIcon} />
            <Text style={Styles.itemTitle}>Navio: </Text>
            <Text style={Styles.shipName}>{shipName}</Text>
            </View>

            <View style={Styles.viewInfo}>
            <Icon name="android-messages" type="MaterialCommunityIcons" style={Styles.messageIcon} />
            <Text style={Styles.itemTitle}>
                Mensagem:{' '}
                <Text style={Styles.message}>
                    {message}
                </Text>
            </Text>
            </View>
            </Card>
            </TouchableOpacity>
        </LinearGradient>
    )
}