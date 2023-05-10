import { View, Text, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';


export default function BarraMusica() {
    const largura = Dimensions.get('screen').width;
    const altura = Dimensions.get('screen').height;
    const [tituloAlbum, setTituloAlbum] = useState('');
    const [imgAlbum, setImgAlbum] = useState('');
    const [artista, setArtista] = useState('');
    const [tituloMusica, setTituloMusica] = useState('');


    const API_URL = 'https://api.deezer.com';

    // nome da música que quer pesquisar
    const searchQuery = 'never gonna give you up';

    axios.get(`${API_URL}/search?q=${searchQuery}`)
        .then(response => {
            // acessando a primeira música encontrada na pesquisa
            const track = response.data.data[0];
            setArtista(track.artist.name);
            setImgAlbum(track.album.cover_medium);
            setTituloAlbum(track.album.title);
            setTituloMusica(track.title);
        })
        .catch(error => {
            console.log(error);
        });


    return (
        <View style={{
            width: largura, borderRadius: 6, backgroundColor: 'gray', height: altura * 0.08, flexDirection: 'row', justifyContent: 'space-between'
        }}>
            <View>
                <Image
                style={{ height: altura * 0.08, width: largura * 0.20 }}
                source={{ uri: imgAlbum }} />
            </View>
            <View style={{ flexDirection: 'column', height: altura * 0.08, width: largura * 0.6 }}><Text>{artista}</Text><Text>{tituloAlbum}</Text><Text>{tituloMusica}</Text>
            </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', height: altura * 0.08, width: largura * 0.20,justifyContent:'space-around' }}><FontAwesome5 name="heart" size={24} color="white" /><FontAwesome5 name="play" size={24} color="white" /></View>

            </View>
            )
}