import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/Home';
import { TodoScreen } from '../screens/Todo';
import { LoginScreen } from '../screens/Login';
import { Header, Drawer } from '../components';

export default function Routes() {
    const HomeStack = createStackNavigator();
    const TodoStack = createStackNavigator();
    const LoginStack = createStackNavigator();
    const DrawerStack = createDrawerNavigator();
    
    const screenOptions = {
        header: props => <Header {...props} />,
    }

    const drawerContent = (
        props => <Drawer {...props} />
    )
    

    const LoginStackScreen = () => (
        <LoginStack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
            <LoginStack.Screen name="Login" component={LoginScreen} />
        </LoginStack.Navigator>
    )
    
    const HomeStackScreen = () => (
        <HomeStack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
    )
    
    const TodoStackScreen = () => (
        <TodoStack.Navigator initialRouteName="Todo" screenOptions={screenOptions}>
            <TodoStack.Screen name="Todo" component={TodoScreen} />
        </TodoStack.Navigator>
    )
    
    const DrawerStackScreen = () => (
        <DrawerStack.Navigator initialRouteName="Home" drawerContent={drawerContent}>
            <DrawerStack.Screen name="Login" component={LoginStackScreen} />
            <DrawerStack.Screen name="Home" component={HomeStackScreen} />
            <DrawerStack.Screen name="Todo" component={TodoStackScreen} />
        </DrawerStack.Navigator>
    )

    return (
        <DrawerStackScreen />
    )
}