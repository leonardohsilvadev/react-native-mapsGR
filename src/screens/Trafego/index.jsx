import React , {useEffect, useState} from 'react';
import { View, Text, Container, Content, H1, Icon} from 'native-base';
import { Alert, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Styles } from './styles';
import { verticalScale, scale } from 'react-native-size-matters';
import { COLOR } from '../../config/styles';
import { api, handleRequestError } from '../../utils/api';
import { Trafego } from './components/Trafego';

export function TrafegoScreen() {
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
          <Trafego/>
          </Content>
      </Container>
  )
    }
