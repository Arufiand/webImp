import { View, Text } from 'react-native'
import React from 'react'
import {
    CardStyleInterpolators,
    createStackNavigator,
  } from '@react-navigation/stack';
import { transition_config } from './utility/transition_config.js';
import BMI_Matrix from '../pages/bmi_matrix/bmiMatrixScreen';
import Array_Pointer from '../pages/array_pointer/arrayPointerScreen';
import main_menu from '../pages/main_menu/MainMenuScreen';

const Stack = createStackNavigator();
const router = () => {
  return (
    <Stack.Navigator
      initialRouteName="main_menu"
      screenOptions={{
        headerShown: false,
      }}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec:{
          open: transition_config,
          close: transition_config
        }
      }}>
        <Stack.Screen
            name="BMI_Matrix"
            component={BMI_Matrix}
            screenOptions={{
            // headerShown: false,
            }}
            options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            transitionSpec:{
                open: transition_config,
                close: transition_config
            },
            title : ' BMI Matrix'
            }}
        />         
        <Stack.Screen
            name="Array_Pointer"
            component={Array_Pointer}
            screenOptions={{
            headerShown: false,
            }}
            options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            transitionSpec:{
                open: transition_config,
                close: transition_config
            },
            title : 'Array Pointer'
            }}
        />         
        <Stack.Screen
            name="main_menu"
            component={main_menu}
            screenOptions={{
            headerShown: false,
            }}
            options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            transitionSpec:{
                open: transition_config,
                close: transition_config
            }
            }}
        />  
    </Stack.Navigator>
  )
}

export default router