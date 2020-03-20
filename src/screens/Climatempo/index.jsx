import React , {useEffect, useState} from 'react';
import { View, Text, Container, Content, Left, Icon, Card, Body, CardItem } from 'native-base';
import { api } from '../../utils/api'
import { SafeAreaView, ScrollView, Alert } from 'react-native';
import { style, styleShadow } from './styles'
import { Hr } from '../../components'
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import { Temperatura } from './components/Temperaturas'
import { Chuvas } from './components/Chuvas'
import { Ventos } from './components/Ventos'
import { Mares } from './components/Mares'
import { COLOR } from '../../config/styles';

export function ClimatempoScreen() {

  const navigation = useNavigation();
  const [previsaoHoje, setPrevisaoHoje] = useState()
  const [previsaoSemana, setPrevisaoSemana] = useState();
  const [mareAtual, setMareAtual] = useState();

  useEffect(() => {
    getPrevisao()
    getPrevisaoHoje()
    getMareAtual()
  }, [])

  function getPrevisao() {  
    let url = '/api/ClimaTempo/getPrevisaoSemana'

    api('').get(url)
    .then(({ data }) => {
        setPrevisaoSemana(data)
    })
    .catch(err => console.log('Erro ao dar get previsão', err));
  }

  function getPrevisaoHoje() {  
    let url = '/api/ClimaTempo/getPrevisaoHoje'

    api('').get(url)
    .then(({ data }) => {
        setPrevisaoHoje(data)
    })
    .catch(err => console.log('Erro ao dar get previsão hoje', err));
  }

  function getMareAtual() {  
    let url = '/api/TabuaMares/getAtual'

    api('').get(url)
    .then(({ data }) => {
        setMareAtual(data)
        console.log(data)
    })
    .catch(err => console.log('Erro ao dar get previsão hoje', err));
  }

  return (
    <Container>
        <Content style={{padding: scale(20)}}>
            <View style={style.boxClimatempo}>
                <Icon
                    name="temperature-high"
                    type="FontAwesome5"
                    style={style.iconTitle}
                    onPress={() => console.log('thiago manda o icone')}
                />
                <Text style={style.title}>Temperatura<Text style={{color: COLOR.ACCENT}}>(°c)</Text></Text>
            </View>
            <Temperatura
                  temperatura={previsaoHoje}
            />
            <Hr/>
            <View style={style.boxClimatempo}>
                <Icon
                    name="weather-pouring"
                    type="MaterialCommunityIcons"
                    style={style.iconTitle}
                    onPress={() => console.log('thiago manda o icone')}
                />
                <Text style={style.title}>Chuvas</Text>
            </View>
            <Chuvas
                chuvas={previsaoSemana}
            />
            <Hr/>
            <View style={style.boxClimatempo}>
                <Icon
                    name="weather-windy"
                    type="MaterialCommunityIcons"
                    style={style.iconTitle}
                    onPress={() => console.log('thiago manda o icone')}
                />
                <Text style={style.title}>Vento<Text style={{color: COLOR.ACCENT}}>(km/h)</Text></Text>
            </View>
            <Ventos
                ventos={previsaoHoje}
            />
            <Hr/>
            <View style={style.boxClimatempo}>
                <Icon
                    name="waves"
                    type="MaterialCommunityIcons"
                    style={style.iconTitle}
                    onPress={() => console.log('thiago manda o icone')}
                />
                <Text style={style.title}>Tábua dos Marés</Text>
            </View>
            <Mares
                ventos={previsaoHoje}
                mareAtual={mareAtual}
            />
        </Content>
    </Container>
  )
}
