import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Left, Icon, Card,} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Styles } from '../styles';
import { style, styleShadow } from '../styles'
import { COLOR } from '../../../config/styles';
import { scale } from 'react-native-size-matters';
export const Mares = ({ventos, mareAtual}) => {
  const navigation = useNavigation();

    const cardBlue = {
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 },
        colors: [COLOR.MAIN, COLOR.ACCENT]
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
                <Text style={style.smallText}>
                    Altura <Text style={style.numberTemp}>{`${mareAtual && mareAtual.altura}m`}</Text>
                </Text>
            </Card>
        </LinearGradient>

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
                    onPress={() => console.log('thiago manda o icone')}
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
                    onPress={() => console.log('thiago manda o icone')}
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
