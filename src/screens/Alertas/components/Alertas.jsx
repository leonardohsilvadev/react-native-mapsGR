import React, { useState } from 'react';
import { View, Text, Card, Icon, Content, Item, DatePicker } from 'native-base';
import { verticalScale, scale } from 'react-native-size-matters';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR } from '../../../config/styles';
import { Styles } from '../styles';

const gradientProps = {
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    colors: [COLOR.SECONDARY, COLOR.SECONDARY_ACCENT],
    style: Styles.gradient
};

export function Alertas({ data, startDate, endDate, motivo }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    }

    return (
        <View>    
            <LinearGradient {...gradientProps}>
                <TouchableOpacity style={{ height: expanded ? scale(120) : scale(50) }} onPress={toggleExpand}>    
                    <Card transparent> 
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: scale(20) }}>
                            <Icon name="bell" type="MaterialCommunityIcons" style={Styles.bellIcon} />
                                <Text style={Styles.accordionTitle}>{data}</Text>
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
        </View>
    )
}