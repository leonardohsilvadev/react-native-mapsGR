import React , {useEffect, useState} from 'react';
import { View, Text, Button, Thumbnail, Content, Form, Item, Input, Label } from 'native-base';
import {api} from '../../utils/api'
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, Styles } from '../../config/styles';
import { SafeAreaView, ScrollView, Alert } from 'react-native';
import {style} from './styles'
import { Hr } from '../../components'
import { useNavigation } from '@react-navigation/native';

const gradientProps = {
  start: { x: 1, y: 0 },
  end: { x: 1, y: 1 },
  colors: [COLOR.MAIN, COLOR.LIGHT_YELLOW]
};

const logoProps = {
  style: style.logoLogin,
  source: require('../../assets/logo-modal.png'),
  square: true,
};

const navioProps = {
  style: style.fundoNavio,
  source: require('../../assets/ship-opacity.png'),
  square: true,
};


export function LoginScreen() {
  
  const [email, setEmailLogin] = useState('')
  const [password, setSenhaLogin] = useState('')
  const navigation = useNavigation();

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
        navigation.navigate('Home')
        console.log(data)
    })
    .catch(err => Alert.alert('Login ou senha inválidos'));
  }


  return (
    <LinearGradient {...gradientProps}>
          <SafeAreaView style={style.container}>
            <View style={style.boxLogin}>
          {/* <KeyboardAvoidingView behavior="padding" enabled> */}
                <Thumbnail {...logoProps} />    
                <Hr/>
                <Text style={style.title}>MONITORAMENTO DE NAVIOS</Text>
                <Item stackedLabel last>
                  <Label style={{borderBottomColor: 'transparent'}} style={style.label}>Email</Label>
                  <Input style={style.input} onChangeText={value => setEmailLogin(value)}/>
                </Item>
                <Item style={{borderBottomColor: 'transparent'}} stackedLabel style={{marginTop: 10}}>
                  <Label style={style.label}>Senha</Label>
                  <Input secureTextEntry={true} style={style.input} onChangeText={value => setSenhaLogin(value)}/>
                </Item>
                <Text style={{alignSelf: 'flex-end', marginRight: 30,fontSize: 14}}>Esqueceu sua senha?</Text>
                <Button style={style.btnEntrar} onPress={() => login()}><Text style={{textAlign: "center"}}>Entrar</Text></Button>
              {/* </KeyboardAvoidingView> */}
            </View>
            <Thumbnail {...navioProps} />  
          </SafeAreaView>
      </LinearGradient>
  )
}
