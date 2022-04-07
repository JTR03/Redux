import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert } from 'react-native'
import { useDispatch } from "react-redux";
import { addNote } from "../Redux/actions";
import React from 'react'

const Tasks = ({navigation}) => {
    const dispatch = useDispatch();
    const [input, setInput] = React.useState("");
    
  
    const handleSubmit = () => {
       if (input.length == 0){
            Alert.alert('Warning','Please add a task')
            return
        }
        dispatch(addNote(input))
        setInput('')
        navigation.goBack();
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Task</Text>
      <TextInput
        style={styles.input}
        value={input}
        placeholder="something"
        onChangeText={(value) => setInput(value)}
      />
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text>ADD</Text>
      </TouchableOpacity>

    </View>
  );
}

export default Tasks

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  text:{
      fontSize:20,
      marginTop:10

  },
  input: {
    width: "90%",
    padding: 10,
    margin: 20,
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
  },
  btn: {
    width: 100,
    height: 40,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});