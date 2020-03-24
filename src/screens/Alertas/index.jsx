import React , {useEffect, useState} from 'react';
import { View, Text, Container, Content, H1, Icon, Item, Input, DatePicker} from 'native-base';
import { Alert, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Styles } from './styles';
import { verticalScale, scale } from 'react-native-size-matters';
import { COLOR } from '../../config/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Accordion } from './components/Accordion';
import { api, handleRequestError } from '../../utils/api';

export function AlertaScreen() {
    const [expanded, setExpanded] = useState(false);
    const [search, setSearch] = useState(new Date());
    const [alertas, setAlertas] = useState([]);
    const [alertasFiltrados, setAlertasFiltrados] = useState([]);

    useEffect(() => {
      getAlertas()
    }, []);

    function getAlertas(){
      let url = `/api/HistoricoAlarmes/get`
  
      api('').get(url)
      .then(({ data }) => {
        setAlertas(data)
        console.log(data)
      })
      .catch(err => console.log('Erro ao get por data', err));
    }

  return (
      <Container>
          <Content>
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
            <Text style={{ paddingLeft: scale(20), paddingBottom: verticalScale(4), color: COLOR.ORANGE, fontSize: scale(14) }}>Pesquisar</Text>
            <Content searchBar style={Styles.searchBar}>
            <Item>
                <DatePicker
                    defaultDate={new Date()}
                    locale={"br"}
                    modalTransparent={true}
                    animationType={"fade"}
                    androidMode={"default"}
                    onDateChange={value => setSearch(value)}
                    disabled={false}
                />
            </Item>
          </Content>
          </ImageBackground>
          <Accordion
            alertas={alertas}
            expanded={expanded}
            onPress={() => setExpanded(!expanded)}
          />
          {/* <Accordion
            title="08/03/2020 - Domingo"
            expanded={expanded}
            onPress={() => setExpanded(!expanded)}
            startDate="02:29:16"
            endDate="02:44:16"
            shipVelocity="6.9"
            shipName="SAN CLEMENTE"
            message="Atenção, Fernando! Alarme disparado as 12:29:04"
          /> */}
          <ImageBackground source={require('../../assets/borda-topo.png')} style={{ width: Dimensions.get('window').width, height: 100, marginTop: -30 }}/>
          <ImageBackground source={require('../../assets/ship-opacity.png')} style={{ width: Dimensions.get('window').width, height: 100, marginTop: -30 }}/>
          </Content>
      </Container>
  )
    }
