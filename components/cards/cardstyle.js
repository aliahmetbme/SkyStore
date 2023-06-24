import {StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#DADADA',
        margin:10,
        borderRadius:10,
    },
    Image:{
        borderRadius:10,
        height: Dimensions.get('window').height /4 ,
        margin:10,
        resizeMode:'contain'
    },
    title:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        
    },
    price:{
        fontSize:15,
        paddingTop:15,
        
    },
    out_of_stock:{
        color:'red',
        fontWeight:'bold',
        justifyContent:'flex-end'

    },
    stock:{
        display:'none'
    }
})