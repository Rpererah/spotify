import React from 'react'
import { Text, View,StatusBar, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ListaFavoritos({navigation}) {
    const alturaDaStatusBar=StatusBar.currentHeight;
  return (
    <View style={{marginTop:alturaDaStatusBar,flex:1,backgroundColor:'black'}}>
       <TouchableOpacity onPress={()=>navigation.goBack()}><Ionicons name={"arrow-back-outline"} size={40} color={'white'} /></TouchableOpacity> 
        <Text style={{color:'white'}}>Minha lista de favoritos</Text>
    </View>
  )
}
