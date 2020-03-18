import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LoginScreen } from '../screens/Login';
import { HomeScreen } from '../screens/Home';
import { ClimatempoScreen } from '../screens/Climatempo';
import { Header, Drawer } from '../components';

export default function Routes() {
    const HomeStack = createStackNavigator();
    const LoginStack = createStackNavigator();
    const ClimatempoStack = createStackNavigator();
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
    
    
    const DrawerStackScreen = () => (
        <DrawerStack.Navigator initialRouteName="Climatempo" drawerContent={drawerContent}>
            <DrawerStack.Screen name="Login" component={LoginStackScreen} />
            <DrawerStack.Screen name="Home" component={HomeStackScreen} />
            <DrawerStack.Screen name="Climatempo" component={ClimatempoStackScreen} />
        </DrawerStack.Navigator>
    )

    return (
        <DrawerStackScreen />
    )
}