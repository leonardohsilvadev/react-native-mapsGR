import React , {useEffect, useState} from 'react';
import { View, Text, Button } from 'native-base';
import { Alert, StyleSheet, Dimensions } from 'react-native';
import {api} from '../../utils/api'

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
 });

export function LoginScreen() {
  
  useEffect(() => {
  }, [])

  function getNavios() {  
    let url = '/api/Navios/getMarineTraffic'
    
    api('').get(url)
    .then(({ data }) => {
      setNavios(data)
    })
    .catch(err => console.log('Erro ao buscar Navios', err));
  }


  return (
    <View style={styles.container}>
        <Button dark onPress={() => Alert.alert('entrar')}>
          <Text>Entrar</Text>
        </Button>
    </View>
  )
}
