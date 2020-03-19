import React , {useEffect, useState} from 'react';
import { View, Text, Container, Content, Left, Icon, Card, Body, CardItem } from 'native-base';
import { api } from '../../utils/api'
import { SafeAreaView, ScrollView, Alert } from 'react-native';
import { style, styleShadow } from './styles'
import { Hr } from '../../components/Hr'
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import { Temperatura } from './components/Temperaturas'
import { Chuvas } from './components/Chuvas'
import { Ventos } from './components/Ventos'
import { COLOR } from '../../config/styles';

export function ClimatempoScreen() {

  const navigation = useNavigation();
  const [previsaoHoje, setPrevisaoHoje] = useState('');
  const [previsaoSemana, setPrevisaoSemana] = useState('');

  useEffect(() => {
    getPrevisao()
    getPrevisaoHoje()
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
            <Temperatura
                  temperatura={previsaoHoje}
            />
            <Hr/>
            <View style={style.boxClimatempo}>
                <Icon
                    name="md-menu"
                    type="Ionicons"
                    // style={Styles.menuIcon}
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
                    name="md-menu"
                    type="Ionicons"
                    // style={Styles.menuIcon}
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
                    name="md-menu"
                    type="Ionicons"
                    // style={Styles.menuIcon}
                    onPress={() => console.log('thiago manda o icone')}
                />
                <Text style={style.title}>Tábua dos Marés</Text>
            </View>
            <Ventos
                ventos={previsaoHoje}
            />
        </Content>
    </Container>
  )
}
