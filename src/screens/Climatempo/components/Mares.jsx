import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Left, Icon, Card,} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { style, styleShadow } from '../styles'
import { COLOR } from '../../../config/styles';
import { verticalScale, scale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Styles } from '../stylesAccordion';
import { ImageBackground } from 'react-native';

export const Mares = ({mareAtual, mareSemana, altura, hora, onPress, expanded}) => {
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

  return (
    <View>
        <LinearGradient {...cardBlue} style={style.cardBox}>
            <Card style={style.card} transparent>              
                <Text style={style.titleCard}>
                    Atual
                </Text>
                <Text style={style.smallText}>
                    Hora <Text style={style.numberTemp}>{`${mareAtual && mareAtual.hora}`}</Text>
                </Text>
                <View style={style.divider}><Text></Text></View>
                <ImageBackground source={require('../../../assets/waves.png')} style={{ width: scale(45), height: verticalScale(45), marginRight: scale(-45)}}/>
                <Text style={style.smallText}>
                    Altura <Text style={style.numberTemp}>{`${mareAtual && mareAtual.altura}m`}</Text>
                </Text>
            </Card>
        </LinearGradient>

        {mareSemana && mareSemana.map(mare => (
            <LinearGradient {...cardBlue} style={style.cardBox}>
            <TouchableOpacity style={{ height: expanded ? scale(140) : scale(60), paddingHorizontal: scale(20) }} onPress={onPress}>
            <Card transparent>
                <View style={{ flexDirection: 'row', marginTop: verticalScale(5), justifyContent: 'space-between' }}>
                    <View style={{marginHorizontal: 0}}>
                        <Text style={style.titleCard}>
                            {mare.dia.split('-')[0]}
                        </Text>
                        <Text style={style.date}>{mare.data}</Text>
                    </View>
                    <ImageBackground source={require('../../../assets/waves.png')} style={{ width: scale(45), height: verticalScale(45)}}/>
                    <Icon name= {expanded ? "md-arrow-dropup-circle" : "md-arrow-dropdown-circle"} type="Ionicons" style={Styles.upDownIcon} />
                </View>

                <View style={Styles.viewInfo}>
                    <Text style={Styles.itemTitle}>Hora </Text>
                    <Text style={Styles.itemInfo}>{hora}</Text>
                    <View style={style.divider}><Text></Text></View>
                    <Text style={Styles.itemTitle}>Altura </Text>
                    <Text style={Styles.itemInfo}>{altura}</Text>
                </View>                
                </Card>
                </TouchableOpacity>
            </LinearGradient>
        ))}

        <LinearGradient {...cardTransparent}>
            <Card style={style.card} transparent>           
            </Card>
        </LinearGradient>
{/*         
        <LinearGradient {...cardBlue} style={style.cardBox}>
            <Card style={style.card} transparent>                            
                <Icon
                    name="weather-sunset"
                    type="MaterialCommunityIcons"
                    style={style.iconCard}
                    
                />
                <Text style={style.titleCard}>
                    Tarde
                </Text>
                <Text style={style.smallText}>
                    Velocidade{"\n"}do Vento
                </Text>
                <Text style={style.numberTemp}>{`${ventos && ventos[0].vvTarde}km/h`}</Text>
            </Card>
        </LinearGradient>
        
        <LinearGradient {...cardBlue} style={style.cardBox}>
            <Card style={style.card} transparent>                        
                <Icon
                    name="weather-night"
                    type="MaterialCommunityIcons"
                    style={style.iconCard}
                    
                />
                <Text style={style.titleCard}>
                    Noite
                </Text>
                <Text style={style.smallText}>
                    Velocidade{"\n"}do Vento
                </Text>
                <Text style={style.numberTemp}>{`${ventos && ventos[0].vvNoite}km/h`}</Text>
            </Card>
        </LinearGradient> */}
    </View>
)};
