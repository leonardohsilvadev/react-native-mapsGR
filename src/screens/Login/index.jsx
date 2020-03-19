import React , {useEffect, useState} from 'react';
import { View, Text, Button, Thumbnail, Content, Form, Item, Input, Label } from 'native-base';
import { Alert, StyleSheet, Dimensions } from 'react-native';
import {api} from '../../utils/api'
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, Styles } from '../../config/styles';
import { SafeAreaView, ScrollView } from 'react-native';
import {Style} from './styles'
import { Hr } from '../../components/Hr'

const gradientProps = {
  start: { x: 1, y: 0 },
  end: { x: 1, y: 1 },
  colors: [COLOR.MAIN, '#EBF9E8']
};

const logoProps = {
  style: Style.logoLogin,
  source: require('../../assets/logo-modal.png'),
  square: true,
};

const navioProps = {
  style: Style.fundoNavio,
  source: require('../../assets/ship-opacity.png'),
  square: true,
};

const style = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    // height: '100%',
    // justifyContent: 'flex-end',
    // backgroundColor: 'linear-gradient(180deg, rgba(91,182,252,1) 50%, rgba(235,249,232,1) 80%)'
  },
 });

export function LoginScreen() {
  
  const [email, setEmailLogin] = useState('')
  const [password, setSenhaLogin] = useState('')

  useEffect(() => {
  }, [])

  function login() {  
    let url = '/api/Authenticate/Login'
    const body = {
      email,
      password
    }
    api('').post(url, body)
    .then(({ data }) => {
      console.log(data)
    })
    .catch(err => console.log('Erro ao logar-se', err));
  }


  return (
    <LinearGradient {...gradientProps}>
      <ScrollView>
        <SafeAreaView style={style.container}>
          <View style={Style.boxLogin}>
              <Thumbnail {...logoProps} />    
              <Hr/>
              <Text style={Style.title}>MONITORAMENTO DE NAVIOS</Text>
              <Item stackedLabel last>
                <Label style={{borderBottomColor: 'transparent'}} style={Style.label}>Email</Label>
                <Input style={Style.input} onChangeText={value => setEmailLogin(value)}/>
              </Item>
              <Item style={{borderBottomColor: 'transparent'}} stackedLabel last style={{marginTop: 10}}>
                <Label style={Style.label}>Senha</Label>
                <Input secureTextEntry={true} style={Style.input} onChangeText={value => setSenhaLogin(value)}/>
              </Item>
              <Text style={{alignSelf: 'flex-end', marginRight: 30,fontSize: 14}}>Esqueceu sua senha?</Text>
              <Button style={Style.btnEntrar} onPress={() => login()}><Text style={{textAlign: "center"}}>Entrar</Text></Button>
          </View>
          <Thumbnail {...navioProps} />  
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  )
}