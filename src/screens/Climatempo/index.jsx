import React , {useEffect, useState} from 'react';
import { View, Text, Container, Content, Icon, Card, Item,} from 'native-base';
import { api } from '../../utils/api'
import { style, StylesAccordion } from './styles'
import { Hr } from '../../components'
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale } from 'react-native-size-matters';
import { Temperatura } from './components/Temperaturas'
import { Chuvas } from './components/Chuvas'
import { Ventos } from './components/Ventos'
import { Mares } from './components/Mares'
import { COLOR } from '../../config/styles';
import { ImageBackground, Dimensions, FlatList } from 'react-native';
import { capitalize } from '../../utils/functions';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDownItem from 'react-native-drop-down-item';

export function ClimatempoScreen() {

    const toggleExpand = () => {
        setExpanded(!expanded);
    }

    const cardBlue = {
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 },
        colors: [COLOR.MARE_LAST, COLOR.MARE_INITIAL],
    };
    const gradientProps = {
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 },
        colors: [COLOR.SECONDARY, COLOR.SECONDARY_ACCENT],
    };

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

    function getMareSemana() {  
        let url = '/api/TabuaMares/getPorSemana'

        api('').get(url)
        .then(({ data }) => {
            let arrayMareSemana = []
            data.map((mareSemana, key) => {
                arrayMareSemana.push(Object.assign(mareSemana, {'key': `${key}`}))
            })
            setMareSemana(arrayMareSemana)
            console.log(data)
        })
        .catch(err => console.log('Erro ao dar get previsão hoje', err));
    }


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
                        <ImageBackground source={require('../../assets/waves.png')} style={{ width: scale(45), height: verticalScale(45), marginRight: scale(-45)}}/>
                        <Text style={style.smallText}>
                            Altura <Text style={style.numberTemp}>{`${mareAtual && mareAtual.altura}m`}</Text>
                        </Text>
                    </Card>
                </LinearGradient>
                {mareSemana && mareSemana.map(mare => (
                    <Mares
                        dia={capitalize(mare.dia.split('-')[0])}
                        data={mare.data}
                    />
                ))}
            </View>
            <ImageBackground source={require('../../assets/borda-topo.png')} style={{ width: Dimensions.get('window').width, height: 100, marginTop: -50 }}/>
            <ImageBackground source={require('../../assets/ship-opacity.png')} style={{ width: Dimensions.get('window').width, height: 100, marginTop: -50 }}/>
        </Content>
    </Container>
  )
}
