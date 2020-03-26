import React , {useEffect, useState} from 'react';
import { View, Text, Container, Content, H1, Icon,} from 'native-base';
import { Alert, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Styles } from './styles';
import { verticalScale, scale } from 'react-native-size-matters';
import { COLOR } from '../../config/styles';
import { api, handleRequestError } from '../../utils/api';
import { Passagens } from './components/Passagens';
import moment from 'moment'
import { useSelector } from 'react-redux';
import { Loader } from '../../components';

export function PassagensScreen() {
    const [passagens, setPassagens] = useState([]);
    const [date, setDate] = useState(new Date()) 
    const [open, setOpen] = useState(true) 
    const email = useSelector(({authenticate: {email}}) => email)

    useEffect(() => {
      getPorData()
    }, [date]);

    async function getPorData() {  
      let url = `/api/HistoricoNavios/getPorData?email=${email}&data=${moment(date).format('DD/MM/YYYY')}&menor=0&maior=23`

      api('').get(url)
      .then(({ data }) => {
        console.log(data)
        setPassagens(data)
      })
      .catch(err => console.log('Erro ao get por data', err))
      .finally(() => {
        setOpen(false);
      });
    }

  return (
      <Container>
          <Content>
            <ImageBackground source={require('../../assets/borda-topo.png')} style={{ width: Dimensions.get('window').width}}>
            <View style={{ flexDirection: 'row', paddingLeft: scale(20), paddingVertical: verticalScale(20), paddingHorizontal: scale(20) }}>
                <Icon
                    name="history"
                    type="MaterialCommunityIcons"
                    style={Styles.iconTitle}
                    onPress={() => {}}
                />
                <H1 style={{ color: COLOR.ACCENT, fontWeight: 'bold', marginLeft: scale(5) }}>Histórico de Passagens</H1>
            </View>            
          </ImageBackground>
          <Passagens
            passagens={passagens}
            setDate={setDate}
          />  
          <ImageBackground source={require('../../assets/borda-topo.png')} style={{ width: Dimensions.get('window').width, height: 100, marginTop: -30 }}/>
          <ImageBackground source={require('../../assets/ship-opacity.png')} style={{ width: Dimensions.get('window').width, height: 100, marginTop: -30 }}/>
          </Content>
          <Loader
            open={open}
          />
      </Container>
  )
    }
