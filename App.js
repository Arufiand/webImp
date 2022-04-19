import React from 'react';
import { LogBox } from 'react-native';
import Router from './config/router';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};
const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
