import React from "react";
import { View, FlatList, Text, SafeAreaView, ScrollView, Image , StyleSheet } from "react-native";
import cardstyle from "./cardstyle";


function App({items}){

    const inStock = items.inStock
    const stockValue = inStock ? ' STOKTA YOK ' : '' ;
    return(
        <SafeAreaView style={cardstyle.container}>
            <Image 
                style={cardstyle.Image}
                source={{uri: items.imgURL}}></Image>
            <View style={{padding:10}}>
                <Text style={cardstyle.title}>{items.title}</Text>
                <Text style={cardstyle.price}>{items.price}</Text>
                <Text style={cardstyle.out_of_stock}>{stockValue}</Text>
            </View>
        </SafeAreaView>
    )
}


export default App;