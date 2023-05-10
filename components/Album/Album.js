import React from 'react'
import { View,Image,Text } from 'react-native'

export default function Album() {
  return (
    <View>
        <Image style={{height:'30%',width:200,borderRadius:100}} source={{uri:'https://www.tvpop.com.br/wp-content/uploads/2023/02/selena-gomez-revela-que-remedio-para-lupus-afeta-o-seu-peso-tvpop.png'}} />
        <Text>
            Selena Gomez
        </Text>
    </View>
  )
}