import React from 'react';
import { Image, Text, View,Dimensions } from 'react-native';

export default function CardPlaylist(props) {
  const larguraDoCelular=Dimensions.get('screen').width;
  const alturaDoCelular=Dimensions.get('screen').height;
    return (
    <View 
    style={{
        width:'37.5%',
        height:'100%',
        marginLeft:(larguraDoCelular/96),
        marginRight:'1%',
        borderRadius:5,
        backgroundColor:'#4B4B4B',
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        columnGap:10,
        
        }}>

        <View>
        <Image
        style={{
            height:60,
            width:50
        }}
       source={props.imagem}
      />
        </View>

        <View>
            <Text style={{color:'white'}}>{props.titulo}</Text>
        </View>
        

    </View>
  )
}
