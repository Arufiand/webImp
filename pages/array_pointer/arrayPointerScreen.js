import { View, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Text, Title,TextInput,Button,Modal, Portal  } from 'react-native-paper';
import styles from '../../config/utility/globalStyle';
const ArrayPointerScreen = () => {
    const array = [5408, 6604, 32158, 84984, 8774, 34871];
    const [indexInput, setIndexInput] = useState(0)
  return (
    <View>
        <Title style= {styles.title}>Array Pointer</Title>
        <View style={{top : 50, alignItems : 'center'}}>
            <TextInput
                style ={{width : 250, margin : 20 }}
                label="Index Count"
                value={indexInput}
                onChangeText={index => setIndexInput(index)}
                keyboardType='numeric'
            />   
        </View>
    </View>
  )

}
export default ArrayPointerScreen