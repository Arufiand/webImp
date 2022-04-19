import { View,StyleSheet } from 'react-native'
import React from 'react'
import { Text, Title,TextInput,Button,Modal, Portal,  } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../config/utility/globalStyle';

const MainMenuScreen = ({navigation}) => {
  return (
    <View>
      <Title style= {styles.title}>Main Menu</Title>
      <View style={{top : 100, alignItems : 'center' }}>
        <TouchableOpacity style = {styles.buttonContainer} onPress={() => navigation.navigate('BMI_Matrix')}>
            <Button mode="contained" style = {styles.button} >
            Calculate BMI
            </Button>        
        </TouchableOpacity>
        <TouchableOpacity  style = {styles.buttonContainer} onPress={() => navigation.navigate('Array_Pointer')}>
            <Button mode="contained" style = {styles.button} >
            Array Pointer
            </Button>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default MainMenuScreen