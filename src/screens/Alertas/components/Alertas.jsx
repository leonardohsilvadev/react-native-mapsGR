import React from 'react';
import { View, Text, Card, Icon, Content, Item, DatePicker } from 'native-base';
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

export const Alertas = ({ expanded, onPress, setSearch, data, startDate, endDate, motivo }) => {
    return (
        <View>            
            <Content>
                <LinearGradient {...gradientProps}>
                    <TouchableOpacity style={{ height: expanded ? scale(120) : scale(40), paddingHorizontal: scale(20) }} onPress={onPress}>
                    <Card transparent>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Icon name="bell" type="MaterialCommunityIcons" style={Styles.bellIcon} />
                            <View>                            
                                <Text style={Styles.accordionTitle}>{data}</Text>
                            </View>
                            <Icon name="alarm-light" type="MaterialCommunityIcons" style={Styles.alarmIcon} />
                            <Icon name= {expanded ? "md-arrow-dropup-circle" : "md-arrow-dropdown-circle"} type="Ionicons" style={Styles.upDownIcon} />
                        </View>

                        <View style={Styles.viewInfo}>
                            <Icon name="android-messages" type="MaterialCommunityIcons" style={Styles.messageIcon} />
                            <Text style={Styles.itemTitle}>
                                Mensagem:{' '}
                                <Text style={Styles.message}>
                                    {motivo}
                                </Text>
                            </Text>
                        </View>
                        <View style={Styles.viewInfo}>
                            <Icon name="play" type="MaterialCommunityIcons" style={Styles.playIcon} />
                            <Text style={Styles.itemTitle}>Início: </Text>
                            <Text style={Styles.startDate}>{startDate}</Text>
                            <Icon name="stop" type="MaterialCommunityIcons" style={Styles.stopIcon} />
                            <Text style={Styles.itemTitle}>Fim: </Text>
                            <Text style={Styles.endDate}>{endDate}</Text>
                        </View>
                        </Card>
                        </TouchableOpacity>
                    </LinearGradient>
            </Content>
        </View>
    )
}