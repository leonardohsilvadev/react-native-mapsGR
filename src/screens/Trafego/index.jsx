import React , {useEffect, useState} from 'react';
import { View, Text, Container, Content, H1, Icon, Item, Input, Card, Body, CardItem, Thumbnail } from 'native-base';
import { Alert, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Styles } from './styles';
import { verticalScale, scale } from 'react-native-size-matters';
import { COLOR } from '../../config/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { api, handleRequestError } from '../../utils/api';
import { Passagens } from './components/Passagens';

export function TrafegoScreen() {
    const [expanded, setExpanded] = useState(false);
    const [search, setSearch] = useState('');
    const [alertas, setAlertas] = useState([]);
    const [alertasFiltrados, setAlertasFiltrados] = useState([]);

    // useEffect(() => {
    //   let url = '/api/ClimaTempo/getAlertas';
    //   const config = { params: { email: 'fernando.salgado93@gmail.com' } };

    //   api('').get(url, config)
    //     .then(({ data }) => {
    //       console.log(data);
    //       setAlertas(data);
    //     })
    //     .catch(handleRequestError)
    // }, []);

    const searchFilter = text => {
        const textoPesquisa = text.toUpperCase();
        const novaPesquisa = Array.from(alertas).filter(
          ({ data }) => data.toUpperCase().indexOf(textoPesquisa) > -1,
        );
    
        setAlertasFiltrados(novaPesquisa);
        setSearch(text);
    };

  return (
      <Container>
          <Content>
            <ImageBackground source={require('../../assets/borda-topo.png')} style={{ width: expanded ? Dimensions.get('window').width : null }}>
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
          <ImageBackground source={require('../../assets/borda-topo.png')} style={{ width: expanded ? Dimensions.get('window').width : null, height: 100, marginTop: -30 }}/>
          <ImageBackground source={require('../../assets/ship-opacity.png')} style={{ width: expanded ? Dimensions.get('window').width : null, height: 100, marginTop: -30 }}/>
          </Content>
      </Container>
  )
    }
