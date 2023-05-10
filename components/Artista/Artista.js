import React from 'react'
import { View,Image,Text,Dimensions } from 'react-native'

export default function Artista() {
    const tamanhoTela=Dimensions.get('screen').height
  return (
    <View style={{marginRight:16,marginTop:8,justifyContent:'space-around',alignItems:'center'}}>
        <Image style={{height:tamanhoTela/6,width:tamanhoTela/6,borderRadius:(tamanhoTela/6)/2}} source={{uri:'https://www.tvpop.com.br/wp-content/uploads/2023/02/selena-gomez-revela-que-remedio-para-lupus-afeta-o-seu-peso-tvpop.png'}} />
        <Text style={{color:'white'}}>
            Selena Gomez
        </Text>
    </View>
  )
}
