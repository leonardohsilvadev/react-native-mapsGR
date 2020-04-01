import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Left, Icon, Card,} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { style, StylesAccordion } from '../styles'
import { COLOR } from '../../../config/styles';
import { verticalScale, scale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';
import { HoraAlturaMares } from './HoraAlturaMares';

export const Mares = ({dia, data, horaAlturas}) => {
    const [expanded, setExpanded] = useState(false);

    const cardBlue = {
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 },
        colors: [COLOR.MARE_LAST, COLOR.MARE_INITIAL],
    };

    const toggleExpand = () => {
        setExpanded(!expanded);
    }

  return (
    <View>        
        <LinearGradient {...cardBlue} style={style.cardBox}>
            <TouchableOpacity style={{ height: expanded ? scale(420) : scale(60) }} onPress={toggleExpand}>
                <Card transparent>
                    <View style={{ flexDirection: 'row', marginTop: verticalScale(5), justifyContent: 'space-between', marginBottom: verticalScale(20) }}>
                        <View style={{marginHorizontal: 0}}>
                            <Text style={style.titleCard}>
                            {dia}
                            </Text>
                            <Text style={style.date}>{data}</Text>
                        </View>
                        <ImageBackground source={require('../../../assets/waves.png')} style={{ width: scale(45), height: verticalScale(45)}}/>
                        <Icon name= {expanded ? "md-arrow-dropup-circle" : "md-arrow-dropdown-circle"} type="Ionicons" style={StylesAccordion.upDownIcon} />
                    </View>
                    {horaAlturas.map((horaAltura, index) => (
                        <HoraAlturaMares
                            hora={horaAltura.hora}
                            altura={horaAltura.altura}
                            index={index}
                        />
                    ))}            
                </Card>
            </TouchableOpacity>
        </LinearGradient> 
    </View>
)};
