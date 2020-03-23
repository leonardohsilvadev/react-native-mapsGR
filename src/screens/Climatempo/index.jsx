import React , {useEffect, useState} from 'react';
import { View, Text, Container, Content, Icon,} from 'native-base';
import { api } from '../../utils/api'
import { style, styleShadow } from './styles'
import { Hr } from '../../components'
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import { Temperatura } from './components/Temperaturas'
import { Chuvas } from './components/Chuvas'
import { Ventos } from './components/Ventos'
import { Mares } from './components/Mares'
import { COLOR } from '../../config/styles';
import { ImageBackground, Dimensions } from 'react-native';

export function ClimatempoScreen() {

  const [previsaoHoje, setPrevisaoHoje] = useState('')
  const [previsaoSemana, setPrevisaoSemana] = useState();
  const [mareAtual, setMareAtual] = useState();
  const [mareSemana, setMareSemana] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    getPrevisao()
    getPrevisaoHoje()
    getMareAtual()
    getMareSemana()
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
    })
    .catch(err => console.log('Erro ao dar get previsão hoje', err));
  }

  async function getMareSemana() {  
    let url = '/api/TabuaMares/getPorSemana'

    await api('').get(url)
    .then(({ data }) => {
        setMareSemana(data)
    })
    .catch(err => console.log('Erro ao dar get previsão hoje', err));
  }

  console.log(mareSemana)

  return (
    <Container>
        <Content>
                <ImageBackground source={require('../../assets/borda-topo.png')} style={{ width: Dimensions.get('window').width, height: 100, marginBottom: scale(-150)}}/>
                <View style={style.boxClimatempo}>
                    <Icon
                        name="temperature-high"
                        type="FontAwesome5"
                        style={style.iconTitle}
                        
                    />
                    <Text style={style.title}>Temperatura<Text style={{color: COLOR.ACCENT}}>(°c)</Text></Text>
                </View>
                <Temperatura
                    temperatura={previsaoHoje}
                />
                <ImageBackground source={require('../../assets/borda-topo.png')} style={{ width: Dimensions.get('window').width, height: 100, marginVertical: -30}}/>
                <Hr/>
                <ImageBackground source={require('../../assets/borda-topo.png')} style={{ width: Dimensions.get('window').width, height: 100, marginBottom: scale(-150) }}/>
                <View style={style.boxClimatempo}>
                    <Icon
                        name="weather-pouring"
                        type="MaterialCommunityIcons"
                        style={style.iconTitle}
                        
                    />
                    <Text style={style.title}>Chuvas</Text>
                </View>
                <Chuvas
                    chuvas={previsaoSemana}
                />
                <ImageBackground source={require('../../assets/borda-topo.png')} style={{ width: Dimensions.get('window').width, height: 100, marginVertical: -30}}/>
                <Hr/>
                <ImageBackground source={require('../../assets/borda-topo.png')} style={{ width: Dimensions.get('window').width, height: 100, marginBottom: scale(-150)}}/>
                <View style={style.boxClimatempo}>
                    <Icon
                        name="weather-windy"
                        type="MaterialCommunityIcons"
                        style={style.iconTitle}
                        
                    />
                    <Text style={style.title}>Vento<Text style={{color: COLOR.ACCENT}}>(km/h)</Text></Text>
                </View>
                <Ventos
                    ventos={previsaoHoje}
                />
                <ImageBackground source={require('../../assets/borda-topo.png')} style={{ width: Dimensions.get('window').width, height: 100, marginVertical: -30}}/>
                <Hr/>            
                <ImageBackground source={require('../../assets/borda-topo.png')} style={{ width: Dimensions.get('window').width, height: 100, marginBottom: scale(-150)}}/>
                <View style={style.boxClimatempo}>
                    <Icon
                        name="waves"
                        type="MaterialCommunityIcons"
                        style={style.iconTitle}
                        
                    />
                    <Text style={style.title}>Tábua dos Marés</Text>
                </View>
                <Mares
                    mareSemana={mareSemana}
                    mareAtual={mareAtual}
                    expanded={expanded}
                    onPress={() => setExpanded(!expanded)}
                    hora="04:20"
                    altura="1.5m"
                />
            <ImageBackground source={require('../../assets/borda-topo.png')} style={{ width: Dimensions.get('window').width, height: 100, marginTop: -50 }}/>
            <ImageBackground source={require('../../assets/ship-opacity.png')} style={{ width: Dimensions.get('window').width, height: 100, marginTop: -50 }}/>
        </Content>
    </Container>
  )
}
