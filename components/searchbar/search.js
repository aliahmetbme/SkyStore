import React from "react";
import {Text, TextInput, View} from 'react-native'
import searchStyle from "./searchStyle";


function App(){

    const [text, onChangeText] = React.useState(''); // metinde bişeyler yazarken default yazıyok olur 
    // yazılar silince geri gelir

    return(
        <TextInput
            style={searchStyle.search}
            onChangeText={onChangeText}
            value={text}
            placeholder="Ara..." // metinde bişeyler yazarken default yazıyok olur 
            // yazılar silince geri gelir
        
            
        />
    )
}

export default App