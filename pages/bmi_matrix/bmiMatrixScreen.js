import React, {useState, useEffect} from 'react'
import { View, TouchableOpacity, StyleSheet,SafeAreaView } from 'react-native'
import { Text, Title,TextInput,Button,Modal, Portal,  } from 'react-native-paper';
import styles from '../../config/utility/globalStyle';

const BmiMatrixScreen = () => {

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [result, setResult] = useState(0);
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 30, height : 200, width : 300, borderRadius: 100/2, alignSelf : 'center', alignContent : 'center'};

    const calculate = (height, weight) => {
        var result = (parseFloat(weight)) / ((parseFloat(height)*0.01)*(parseFloat(height)*0.01));
        result = result.toFixed(2);
        setBmi(result);
        if(result) {
            setHeight(0);
            setWeight(0);
            showModal();
        }
        //showing result per BMI standards
        if(result < 18.5){
            setResult('Underweight');
        }
        else if (result >= 18.5 && result < 25) {
            setResult('Normal Weight');
        }
        else if (result >= 25 && result < 30) {
            setResult('Overweight');
        }
        else if (result >= 30) {
            setResult('Obese');
        }
        else {
            alert ('Incorrect Input!');
            setResult('Wrong Input');
        }
    }

    return (
        <SafeAreaView>
          <Title style= {styles.title}>BMI Calculator</Title>
          <View style={{top : 50, alignItems : 'center'}}>
            <TextInput
                style ={{width : 250, margin : 20 }}
                label="Height"
                value={height}
                onChangeText={height => setHeight(height)}
                keyboardType='numeric'
            />            
            <TextInput
                style ={{width : 250,margin : 20 }}
                label="Weight"
                value={weight}
                onChangeText={weight => setWeight(weight)}
                keyboardType='numeric'
            />
            <Button mode="contained" onPress={() => calculate(height, weight)}>
                Press me
            </Button>

            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Title>BMI Results</Title>
                    <Text>{bmi}</Text>
                    <Text>{result}</Text>
                </Modal>
             </Portal>

          </View>
        </SafeAreaView>
    )
}
export default BmiMatrixScreen