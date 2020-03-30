import React , {useEffect, useState} from 'react';
import { View, Container, H1, Icon, Item, Button} from 'native-base';
import { Alert, StyleSheet, Dimensions, ImageBackground, FlatList, Text } from 'react-native';
import { Styles } from './styles';
import { verticalScale, scale } from 'react-native-size-matters';
import { COLOR } from '../../config/styles';
import { Alertas } from './components/Alertas';
import { api, handleRequestError } from '../../utils/api';
import { Loader } from '../../components';
import { capitalize } from '../../utils/functions'
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

export function AlertaScreen() {
    const [expanded, setExpanded] = useState(false)
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const [alertas, setAlertas] = useState([]);
    const [open, setOpen] = useState(false)

    useEffect(() => {
      getAlertas()
    }, []);

    // useEffect(() => {
    //   getAlertasByDate()
    // }, [search]);
    
    const showDatepicker = () => {
      setShow(true)
    }

    function getAlertas(){
      let url = `/api/HistoricoAlarmes/get`
      setOpen(true)  

      api('').get(url)
      .then(({ data }) => {
          let arrayAlertas = []
          data.map((alerta, key) => {
            arrayAlertas.push(Object.assign(alerta, {'key': `${key}`}))
          })
          setAlertas(arrayAlertas.sort((v1, v2) => v1.id - v2.id).map((v) => v))
      })
      .catch(err => console.log('Erro ao get por data', err))
      .finally(() => {
        setOpen(false)
      });
    }

    function getAlertasByDate(value){
      if(date !== value.nativeEvent.timestamp){
        setShow(false)
        setDate(value.nativeEvent.timestamp)
        let url = `/api/HistoricoAlarmes/getPorData?data=${moment(value.nativeEvent.timestamp).format('DD/MM/YYYY')}`
        setOpen(true)  

        api('').get(url)
        .then(({ data }) => {
            if(data == 0){
              Alert.alert('Nenhum alerta foi disparado neste dia!')
              getAlertas()
            } else {
              let arrayAlertas = []
              data.map((alerta, key) => {
                arrayAlertas.push(Object.assign(alerta, {'key': `${key}`}))
              })
              setAlertas(arrayAlertas)
            }
        })
        .catch(err => console.log('Erro ao get por data', err))
        .finally(() => {
          setOpen(false)
        });
      }
    }

    const alertasOrdenado = alertas.sort((v1, v2) => v1.id - v2.id).map((v) => v);
    

    return (  
      <Container>
            <ImageBackground source={require('../../assets/borda-topo.png')} style={{ width: expanded ? Dimensions.get('window').width : null }}>
            <View style={{ flexDirection: 'row', paddingLeft: scale(20), paddingVertical: verticalScale(20), paddingHorizontal: scale(20) }}>
                <Icon
                    name="bell-outline"
                    type="MaterialCommunityIcons"
                    style={Styles.iconTitle}
                    onPress={() => {}}
                />
                <H1 style={{ color: COLOR.ACCENT, fontWeight: 'bold', marginLeft: scale(10) }}>Histórico de Alertas</H1>
            </View>
          </ImageBackground>
          <View>
            <Text style={{ paddingLeft: scale(20), paddingBottom: verticalScale(4), color: COLOR.ORANGE, fontSize: scale(14) }}>Pesquisar</Text>
            <View searchBar style={Styles.searchBar}>
            <Button onPress={showDatepicker} transparent><Text>{moment(date).format('DD/MM/YYYY')}</Text></Button>
                {show && 
                  <Item>
                    <DateTimePicker
                      testID="dateTimePicker"
                      timeZoneOffsetInMinutes={0}
                      value={date}
                      mode={'date'}
                      display="default"
                      onChange={value => getAlertasByDate(value)}
                      locale='pt-BR' 
                      onTouchCancel={() => console.log()}
                    />
                  </Item> 
                }
            </View>
          </View>
          <View>
            <FlatList
              data={alertas.reverse()}
              renderItem={({ item }) => (
                <Alertas
                    data={`${item.data} - ${capitalize(item.dia.split('-')[0])}`}
                    startDate={item.horaInicio}
                    endDate={item.horaFim}
                    motivo={item.motivo}
                />
              )}
            />
          </View>
          <ImageBackground source={require('../../assets/borda-topo.png')} style={{ width: Dimensions.get('window').width, height: 100, marginTop: -30 }}/>
          <ImageBackground source={require('../../assets/ship-opacity.png')} style={{ width: Dimensions.get('window').width, height: 100, marginTop: -30 }}/>
      </Container>
  )
}