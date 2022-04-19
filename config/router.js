import { View, Text } from 'react-native'
import React from 'react'
import {
    CardStyleInterpolators,
    createStackNavigator,
  } from '@react-navigation/stack';
import { transition_config } from './utility/transition_config.js';
import BMI_Matrix from '../pages/bmi_matrix/bmiMatrixScreen';
import Array_Pointer from '../pages/array_pointer/arrayPointerScreen';

const Stack = createStackNavigator();
const router = () => {
  return (
    <Stack.Navigator
      initialRouteName="BMI_Matrix"
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
            }
            }}
        />  
    </Stack.Navigator>
  )
}

export default router