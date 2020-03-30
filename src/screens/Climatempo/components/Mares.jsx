import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Left, Icon, Card,} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { style, StylesAccordion } from '../styles'
import { COLOR } from '../../../config/styles';
import { verticalScale, scale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';

export const Mares = ({dia, data, altura, hora}) => {
    const [expanded, setExpanded] = useState(false);
    const navigation = useNavigation();

    const cardBlue = {
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 },
        colors: [COLOR.MARE_LAST, COLOR.MARE_INITIAL],
        style: Styles.gradient
    };

    const cardTransparent = {
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 },
        colors: [COLOR.LIGHT, COLOR.LIGHT]
    };

    const toggleExpand = () => {
        setExpanded(!expanded);
    }

  return (
    <View>        
        <LinearGradient {...cardBlue} style={style.cardBox}>
            <TouchableOpacity style={{ height: expanded ? scale(140) : scale(60), paddingHorizontal: scale(20) }} onPress={toggleExpand}>
            <Card transparent>
                <View style={{ flexDirection: 'row', marginTop: verticalScale(5), justifyContent: 'space-between' }}>
                    <View style={{marginHorizontal: 0}}>
                        <Text style={style.titleCard}>
                        {dia}
                        </Text>
                        <Text style={style.date}>{data}</Text>
                    </View>
                    <ImageBackground source={require('../../../assets/waves.png')} style={{ width: scale(45), height: verticalScale(45)}}/>
                    <Icon name= {expanded ? "md-arrow-dropup-circle" : "md-arrow-dropdown-circle"} type="Ionicons" style={StylesAccordion.upDownIcon} />
                </View>

                <View style={StylesAccordion.viewInfo}>
                    {/* <Text style={StylesAccordion.itemTitle}>Hora </Text>
                    <Text style={StylesAccordion.itemInfo}>{hora}</Text>
                    <View style={style.divider}><Text></Text></View>
                    <Text style={StylesAccordion.itemTitle}>Altura </Text>
                    <Text style={StylesAccordion.itemInfo}>{altura}</Text> */}
                </View>                
                </Card>
            </TouchableOpacity>
        </LinearGradient>
    </View>
)};
