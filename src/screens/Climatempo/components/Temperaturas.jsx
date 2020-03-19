import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Left, Icon, Card,} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Styles } from '../styles';
import { style, styleShadow } from '../styles'
import { COLOR } from '../../../config/styles';
export const Temperatura = ({temperatura}) => {
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
                    onPress={() => console.log('thiago manda o icone')}
                />
                <Text style={style.titleCard}>
                    Amanhecer
                </Text>
                <Text style={style.smallText}>
                    Min. <Text style={style.numberTemp}>{`${temperatura && temperatura[0].minimoAmanhecer}°`}</Text>
                </Text>
                <View style={style.divider}><Text></Text></View>
                <Text style={style.smallText}>
                    Max. <Text style={style.numberTemp}>{`${temperatura && temperatura[0].maximoAmanhecer}°`}</Text>
                </Text>
            </Card>
        </LinearGradient>

        <LinearGradient {...cardOrange} style={style.cardBox}>
            <Card style={style.card} transparent>                            
                <Icon
                    name="white-balance-sunny"
                    type="MaterialCommunityIcons"
                    style={style.iconCard}
                    onPress={() => console.log('thiago manda o icone')}
                />
                <Text style={style.titleCard}>
                    Manhã
                </Text>
                <Text style={style.smallText}>
                    Min. <Text style={style.numberTemp}>{`${temperatura && temperatura[0].minimoManha}°`}</Text>
                </Text>
                <View style={style.divider}><Text></Text></View>
                <Text style={style.smallText}>
                    Max. <Text style={style.numberTemp}>{`${temperatura && temperatura[0].maximoManha}°`}</Text>
                </Text>
            </Card>
        </LinearGradient>
        
        <LinearGradient {...cardOrange} style={style.cardBox}>
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
                    Min. <Text style={style.numberTemp}>{`${temperatura && temperatura[0].minimoTarde}°`}</Text>
                </Text>
                <View style={style.divider}><Text></Text></View>
                <Text style={style.smallText}>
                    Max. <Text style={style.numberTemp}>{`${temperatura && temperatura[0].maximoTarde}°`}</Text>
                </Text>
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
                    Min. <Text style={style.numberTemp}>{`${temperatura && temperatura[0].minimoNoite}°`}</Text>
                </Text>
                <View style={style.divider}><Text></Text></View>
                <Text style={style.smallText}>
                    Max. <Text style={style.numberTemp}>{`${temperatura && temperatura[0].maximoNoite}°`}</Text>
                </Text>
            </Card>
        </LinearGradient>
    </View>
)};
