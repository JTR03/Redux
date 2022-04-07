import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';


const Home = () => {
  const tasks = useSelector((state) => state.addReducer);
  const renderItem = ({ item }) => (
    <View>
      <Text style={styles.text}>{item}</Text>
    </View>
  );

  return (
      
    <View style={styles.list}>
      <FlatList 
     
      data={tasks}
      renderItem={renderItem}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    list:{
        alignItems:'center',
        margin: 20
    },
    text: {
        fontSize: 25,
        margin:5
    }
})