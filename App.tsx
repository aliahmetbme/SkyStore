import React from "react";
import { View, FlatList, Text, SafeAreaView, ScrollView, Image , StyleSheet, TextInput } from "react-native";
import SearchBar from "./components/searchbar"
import store_data from "./store.json"
import Cards from "./components/cards/cards"


function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.title_style}>Sky Store</Text>
      <SearchBar></SearchBar>
      <FlatList 
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}         
          horizontal={false}
          data={store_data}
          renderItem={renderStore}
          />
    
    </View>
  )
}



const renderStore = ({item}) => <Cards items={item} />;


const styles = StyleSheet.create({
  title_style:{
    color:'purple',
    fontSize:40,
    padding:10,
    fontWeight:'bold'
  },
  container:{
    flex:1,
    }
})

export default App;