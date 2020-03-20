import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Left, Icon, Card,} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Styles } from '../styles';
import { style, styleShadow } from '../styles'
import { COLOR } from '../../../config/styles';
import { scale } from 'react-native-size-matters';
export const Ventos = ({ventos}) => {
  const navigation = useNavigation();

    const cardBlue = {
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 },
        colors: [COLOR.MAIN, COLOR.ACCENT]
    };

    const cardOrange = {
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 },
        colors: [COLOR.WARNING, COLOR.ORANGE]
    };

  return (
    <View>
        <LinearGradient {...cardBlue} style={style.cardBox}>
            <Card style={style.card} transparent>                                       
                <Icon
                    name="weather-sunset-up"
                    type="MaterialCommunityIcons"
                    style={style.iconCard}
                    
                />
                <Text style={style.titleCard}>
                    Amanhecer
                </Text>
                <Text style={style.smallText}>
                    Velocidade{"\n"}do Vento
                </Text>
                <Text style={style.numberTemp}>{`${ventos && ventos[0].vvAmanhecer}km/h`}</Text>
            </Card>
        </LinearGradient>

        <LinearGradient {...cardOrange} style={style.cardBox}>
            <Card style={style.card} transparent>                   
                <Icon
                    name="white-balance-sunny"
                    type="MaterialCommunityIcons"
                    style={style.iconCard}
                    
                />
                <Text style={style.titleCard}>
                    Manhã
                </Text>
                <Text style={style.smallText}>
                    Velocidade{"\n"}do Vento
                </Text>
                <Text style={style.numberTemp}>{`${ventos && ventos[0].vvManha}km/h`}</Text>
            </Card>
        </LinearGradient>
        
        <LinearGradient {...cardOrange} style={style.cardBox}>
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
        </LinearGradient>
    </View>
)};
