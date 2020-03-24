import React , {useEffect, useState} from 'react';
import { View, Text, Container, Content, H1, Icon} from 'native-base';
import { Alert, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Styles } from './styles';
import { verticalScale, scale } from 'react-native-size-matters';
import { COLOR } from '../../config/styles';
import { api, handleRequestError } from '../../utils/api';
import { Trafego } from './components/Trafego';
import moment from 'moment'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Markers } from './components/Markers';
import { Lines } from './components/Lines';

export function TrafegoScreen() {
  const [navios, setNavios] = useState([]);
  const [trafegoNavio, setTrafegoNavio] = useState([]);
  const [navio, setNavio] = useState('');
  const [date, setDate] = useState(new Date()) 

  const styles = StyleSheet.create({
    map: {
      height: 220,
      width: Dimensions.get('window').width
    },
  })

  useEffect(() => {
    getNaviosByDate()
  }, [date]);

  function getNaviosByDate(){
    let url = `/api/HistoricoNavios/getNavios?data=${moment(date).format('MM/DD/YYYY')}`

    api('').get(url)
    .then(({ data }) => {
      setNavios(data)
    })
    .catch(err => console.log('Erro ao get por data', err));
  }
  
  function getTrafegoByNavio(){
    let url = `/api/HistoricoNavios/getTrafego?data=${moment(date).format('MM/DD/YYYY')}&nome=${navio}`

    api('').get(url)
    .then(({ data }) => {
      setTrafegoNavio(data)
    })
    .catch(err => console.log('Erro ao get por data', err));
  }

  console.log(navio)

  return (
      <Container>
          <Content>
            <ImageBackground source={require('../../assets/borda-topo.png')} style={{ width: Dimensions.get('window').width}}>
            <View style={{ flexDirection: 'row', paddingLeft: scale(20), paddingVertical: verticalScale(20), paddingHorizontal: scale(20) }}>
                <Icon
                    name="earth"
                    type="MaterialCommunityIcons"
                    style={Styles.iconTitle}
                    onPress={() => {}}
                />
                <H1 style={{ color: COLOR.ACCENT, fontWeight: 'bold', marginLeft: scale(5) }}>Histórico de Tráfego</H1>
            </View>            
          </ImageBackground>
          <Trafego
            setDate={setDate} 
            setNavio={setNavio}
            navio={navio}
            navios={navios}
            getTrafegoByNavio={getTrafegoByNavio}
          />
          <Content>
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={styles.map}
                  region={{
                      latitude: -23.981225, 
                      longitude: -46.291127,
                      latitudeDelta: 0.015,
                      longitudeDelta: 0.0121,
                  }}      
                  maxZoomLevel={20} // default => 20
                  enableZoomControl={true}
                  zoomEnabled = {true}
                >
                  <Markers
                    trafegoNavio={trafegoNavio}
                  />
                  <Lines
                    trafegoNavio={trafegoNavio}
                  />
                </MapView>
            </Content>
          </Content>
      </Container>
  )
    }
