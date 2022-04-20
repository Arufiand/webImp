import { View, StyleSheet,FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Text, Title,TextInput,Button,Modal, Portal   } from 'react-native-paper';
import styles from '../../config/utility/globalStyle';
const ArrayPointerScreen = () => {
    const array = [5408, 6604, 32158, 84984, 8774, 34871];
    const [arrayChoosen, setArrayChoosen] = useState([]);
    const [result, setResult] = useState(0);
    const [indexInput, setIndexInput] = useState(0);
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 30, height : 200, width : 300, borderRadius: 100/2, alignSelf : 'center', alignContent : 'center'};

    useEffect(() => {
      setArrayChoosen(array.sort((a,b) => {
        console.log(`a = ${a}`);
        console.log(`b = ${b}`);
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      }));
    }, [])
    

    const calculate = (indexInput) => {
      setIndexInput(0);
      showModal();
      if(indexInput-1 >= arrayChoosen.length){
        alert('Your input was larger that the lenght of array!')
        setResult(404);
      }
      else {
        setResult(arrayChoosen[indexInput-1]);
      }
  }

  return (
    <View>
        <Title style= {styles.title}>Array Pointer</Title>
        <View style={{top : 50, alignItems : 'center'}}>
        <FlatList
        data={array}
        renderItem={({item}) => <Text style={styles.label}>{item}</Text>}
      />
            <TextInput
                style ={{width : 250, margin : 20 }}
                label="Index Count"
                value={indexInput}
                onChangeText={index => setIndexInput(index)}
                keyboardType='numeric'
            />   
          <Button mode="contained" onPress={() => calculate(indexInput)}>
              Press me
          </Button>
          <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Title>Array Results</Title>
                <Text>{result}</Text>
            </Modal>
          </Portal>
        </View>

    </View>
  )

}
export default ArrayPointerScreen