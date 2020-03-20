import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Left, Icon, Card,} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Styles } from '../styles';
import { style, styleShadow } from '../styles'
import { COLOR } from '../../../config/styles';
import { scale } from 'react-native-size-matters';
export const Chuvas = ({chuvas}) => {
    const navigation = useNavigation();
    
    let cardSunOrRain = {};
    let chuvaCards = [];
    let iconSunOrRain = '';
    let fontIcon = '';

    {chuvas && chuvas.map((chuva, key) => {
        if(chuva.chanceChuva > 0){
            cardSunOrRain = {                
                start: { x: 0, y: 0 },
                end: { x: 1, y: 0 },
                colors: [COLOR.MAIN, COLOR.ACCENT]
            } 
            iconSunOrRain = 'cloud-showers-heavy';
            fontIcon = 'FontAwesome5';
        } else {
            cardSunOrRain = {
                start: { x: 0, y: 0 },
                end: { x: 1, y: 0 },
                colors: [COLOR.WARNING, COLOR.ORANGE]
            }
            iconSunOrRain = 'white-balance-sunny';
            fontIcon = 'MaterialCommunityIcons';
        }
        
        chuvaCards.push(
            <LinearGradient {...cardSunOrRain} style={style.cardBox}>
                <Card style={style.card} transparent>
                    <View style={{marginHorizontal: 0}}>
                        <Text style={style.titleCard}>
                            {chuva.dia.split('-')[0]}
                        </Text>
                        <Text style={style.date}>{chuva.data}</Text>
                        </View>
                    <View style={{width: scale(130), marginRight: 20}}>
                        <Text style={style.smallText}>
                            Chance de chuva <Text style={style.numberTemp}>{`${chuva && chuva.chanceChuva}%`}</Text>
                        </Text>
                        <View style={style.dividerHorizontal}></View>
                        <Text style={style.smallText}>
                            Qtde. de chuva <Text style={style.numberTemp}>{`${chuva && chuva.chanceChuva}mm`}</Text>
                        </Text>
                    </View>
                    <Icon
                        name={iconSunOrRain}
                        type={fontIcon}
                        style={style.iconCard}
                        onPress={() => console.log('thiago manda o icone')}
                    />
                </Card>
            </LinearGradient>
        )
    })}

  return (
    <View>
        {chuvaCards}
    </View>
)};
