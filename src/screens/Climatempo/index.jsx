import React , {useEffect, useState} from 'react';
import { View, Text, Container, Content, Left, Icon, Card, Body, CardItem } from 'native-base';
import { api } from '../../utils/api'
import { SafeAreaView, ScrollView, Alert } from 'react-native';
import { style, styleShadow } from './styles'
import { Hr } from '../../components'
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import { COLOR } from '../../config/styles';
import LinearGradient from 'react-native-linear-gradient';

export function ClimatempoScreen() {

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

  const navigation = useNavigation();
  const [previsaoHoje, setPrevisaoHoje] = useState('');

  useEffect(() => {
    getPrevisao()
    getPrevisaoHoje()
  }, [])

  function getPrevisao() {  
    let url = '/api/ClimaTempo/getPrevisao'

    api('').get(url)
    .then(({ data }) => {
        console.log(data)
    })
    .catch(err => console.log('Erro ao dar get previsão', err));
  }

  function getPrevisaoHoje() {  
    let url = '/api/ClimaTempo/getPrevisaoHoje'

    api('').get(url)
    .then(({ data }) => {
        setPrevisaoHoje(data)
        console.log(data)
    })
    .catch(err => console.log('Erro ao dar get previsão hoje', err));
  }

  console.log('previsaoHoje', previsaoHoje)

  return (
    <Container>
        <Content style={{padding: scale(20)}}>
            <View style={style.boxClimatempo}>
                <Icon
                    name="md-menu"
                    type="Ionicons"
                    // style={Styles.menuIcon}
                    onPress={() => console.log('thiago manda o icone')}
                />
                <Text style={style.title}>Temperatura(°c)</Text>
            </View>
            <View>
                <LinearGradient {...cardBlue} style={style.cardBox}>
                    <Card style={style.card} transparent>                            
                        <Icon
                            name="md-menu"
                            type="Ionicons"
                            // style={Styles.menuIcon}
                            onPress={() => console.log('thiago manda o icone')}
                        />
                        <Text style={style.titleCard}>
                            Amanhecer
                        </Text>
                        <Text style={style.smallText}>
                            Min. <Text style={style.numberTemp}>{`${previsaoHoje && previsaoHoje[0].minimoAmanhecer}°`}</Text>
                        </Text>
                        <View style={style.divider}></View>
                        <Text style={style.smallText}>
                            Max. <Text style={style.numberTemp}>{`${previsaoHoje && previsaoHoje[0].maximoAmanhecer}°`}</Text>
                        </Text>
                    </Card>
                </LinearGradient>

                <LinearGradient {...cardOrange} style={style.cardBox}>
                    <Card style={style.card} transparent>                            
                        <Icon
                            name="md-menu"
                            type="Ionicons"
                            // style={Styles.menuIcon}
                            onPress={() => console.log('thiago manda o icone')}
                        />
                        <Text style={style.titleCard}>
                            Manhã
                        </Text>
                        <Text style={style.smallText}>
                            Min. <Text style={style.numberTemp}>{`${previsaoHoje && previsaoHoje[0].minimoManha}°`}</Text>
                        </Text>
                        <View style={style.divider}></View>
                        <Text style={style.smallText}>
                            Max. <Text style={style.numberTemp}>{`${previsaoHoje && previsaoHoje[0].maximoManha}°`}</Text>
                        </Text>
                    </Card>
                </LinearGradient>
                
                <LinearGradient {...cardOrange} style={style.cardBox}>
                    <Card style={style.card} transparent>                            
                        <Icon
                            name="md-menu"
                            type="Ionicons"
                            // style={Styles.menuIcon}
                            onPress={() => console.log('thiago manda o icone')}
                        />
                        <Text style={style.titleCard}>
                            Tarde
                        </Text>
                        <Text style={style.smallText}>
                            Min. <Text style={style.numberTemp}>{`${previsaoHoje && previsaoHoje[0].minimoTarde}°`}</Text>
                        </Text>
                        <View style={style.divider}></View>
                        <Text style={style.smallText}>
                            Max. <Text style={style.numberTemp}>{`${previsaoHoje && previsaoHoje[0].maximoTarde}°`}</Text>
                        </Text>
                    </Card>
                </LinearGradient>
                
                <LinearGradient {...cardBlue} style={style.cardBox}>
                    <Card style={style.card} transparent>                            
                        <Icon
                            name="md-menu"
                            type="Ionicons"
                            // style={Styles.menuIcon}
                            onPress={() => console.log('thiago manda o icone')}
                        />
                        <Text style={style.titleCard}>
                            Noite
                        </Text>
                        <Text style={style.smallText}>
                            Min. <Text style={style.numberTemp}>{`${previsaoHoje && previsaoHoje[0].minimoNoite}°`}</Text>
                        </Text>
                        <View style={style.divider}></View>
                        <Text style={style.smallText}>
                            Max. <Text style={style.numberTemp}>{`${previsaoHoje && previsaoHoje[0].maximoNoite}°`}</Text>
                        </Text>
                    </Card>
                </LinearGradient>
            </View>
            <Hr/>
            <View style={style.boxClimatempo}>
                <Icon
                    name="md-menu"
                    type="Ionicons"
                    // style={Styles.menuIcon}
                    onPress={() => console.log('thiago manda o icone')}
                />
                <Text style={style.title}>Chuvas</Text>
                <View>
                    
                </View>
            </View>
        </Content>
    </Container>
  )
}
