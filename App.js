import React from 'react';
import { LogBox } from 'react-native';
import Router from './config/router';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
const App = () => {
  return (
  <NavigationContainer>
    <Router />
  </NavigationContainer>
  );
};

export default App;
