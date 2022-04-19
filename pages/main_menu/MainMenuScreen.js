import { View,StyleSheet } from 'react-native'
import React from 'react'
import { Text, Title,TextInput,Button,Modal, Portal,  } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

const styles = StyleSheet.create({
    title:{
       paddingTop:30,
       paddingBottom:10,
       textAlign: "center",
       fontSize: 30,
       fontWeight:"bold",
    },
    label:{
       marginLeft: 15,
    },
    button : {
        margin : 10, height : 50, width : 300, borderRadius : 25, alignItems : 'center', alignContent : 'center', padding : 7
    },
    buttonContainer : {
        height : 100, width : 350, margin : 20,padding:20,alignContent : 'center'
    }
 })

export default MainMenuScreen