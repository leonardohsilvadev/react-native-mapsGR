import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LoginScreen } from '../screens/Login';
import { HomeScreen } from '../screens/Home';
import { ClimatempoScreen } from '../screens/Climatempo';
import { AlertaScreen } from '../screens/Alertas';
import { PassagensScreen } from '../screens/Passagens';
import { TrafegoScreen } from '../screens/Trafego';
import { Header, Drawer } from '../components';

export default function Routes() {
    const HomeStack = createStackNavigator();
    const LoginStack = createStackNavigator();
    const ClimatempoStack = createStackNavigator();
    const AlertaStack = createStackNavigator();
    const PassagensStack = createStackNavigator();
    const TrafegosStack = createStackNavigator();
    const DrawerStack = createDrawerNavigator();
    
    const screenOptions = {
        header: props => <Header {...props} />,
    }

    const drawerContent = (
        props => <Drawer {...props} />
    )
    
    const LoginStackScreen = () => (
        <LoginStack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <LoginStack.Screen name="Login" component={LoginScreen} />
        </LoginStack.Navigator>
    )
    
    const HomeStackScreen = () => (
        <HomeStack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
    )

    const ClimatempoStackScreen = () => (
        <ClimatempoStack.Navigator initialRouteName="Climatempo" screenOptions={screenOptions}>
            <ClimatempoStack.Screen name="Climatempo" component={ClimatempoScreen} />
        </ClimatempoStack.Navigator>
    )

    const AlertaStackScreen = () => (
        <AlertaStack.Navigator initialRouteName="Alerta" screenOptions={screenOptions}>
            <AlertaStack.Screen name="Alerta" component={AlertaScreen} />
        </AlertaStack.Navigator>
    )

    const PassagensStackScreen = () => (
        <PassagensStack.Navigator initialRouteName="Passagens" screenOptions={screenOptions}>
            <PassagensStack.Screen name="Passagens" component={PassagensScreen} />
        </PassagensStack.Navigator>
    )

    const TrafegoStackScreen = () => (
        <TrafegosStack.Navigator initialRouteName="Trafego" screenOptions={screenOptions}>
            <TrafegosStack.Screen name="Trafego" component={TrafegoScreen} />
        </TrafegosStack.Navigator>
    )    
    
    const DrawerStackScreen = () => (
        <DrawerStack.Navigator initialRouteName="Alertas" drawerContent={drawerContent}>
            <DrawerStack.Screen name="Monitoramento" component={HomeStackScreen} />
            <DrawerStack.Screen name="Condicoes" component={ClimatempoStackScreen} />
            <DrawerStack.Screen name="Login" component={LoginStackScreen} />
            <DrawerStack.Screen name="Alertas" component={AlertaStackScreen} />
            <DrawerStack.Screen name="Passagens" component={PassagensStackScreen} />
            <DrawerStack.Screen name="Trafego" component={TrafegoStackScreen} />
        </DrawerStack.Navigator>
    )

    return (
        <DrawerStackScreen />
    )
}