import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../src/store';
import Routes from './config/routes'
const { store, persistor } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;