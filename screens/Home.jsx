import { Text, TouchableOpacity, View, StatusBar, ScrollView, SafeAreaView } from "react-native";
import CardPlaylist from "../components/CardPlaylist/CardPlaylist";
import imagem1 from './../assets/bg.png';
import imagem2 from './../assets/bg1.png';
import imagem3 from './../assets/bg2.png';
import imagem4 from './../assets/bg3.png';
import imagem5 from './../assets/bg4.png';
import { useFonts } from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Artista from "../components/Artista/Artista";
import BarraMusica from "../components/BarraMusica/BarraMusica";
export default function Home({ navigation }) {
  const alturaDaStatusBar = StatusBar.currentHeight;

  const [loaded] = useFonts({
    'Inter': require('./../assets/fonts/Inter/static/Inter-Medium.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <ScrollView style={{ backgroundColor: 'black', marginTop: alturaDaStatusBar }}>
      <View style={{marginBottom:30,marginTop:20,justifyContent:'space-between',flexDirection:'row'}}>
        <View>
          <Text style={{color:'white',fontSize:24,fontFamily:'Inter',fontWeight:700}}>Boa Noite</Text>
        </View>
        <View style={{flexDirection:'row',gap:16}}>
        <FontAwesome5 name="bell" size={24} color="white" />
        <Ionicons name="timer-outline" size={24} color="white" />
        <Octicons name="gear" size={24} color="white" />
        </View>

        </View>
      
      <View style={{ flexDirection: 'column'}}>
        <View style={{ flexDirection: 'row',marginBottom:8}}>
          <CardPlaylist imagem={imagem1} titulo="top findi" />
          <CardPlaylist imagem={imagem2} titulo="mais curtidas" />
        </View>
        <View style={{ flexDirection: 'row',marginBottom:8 }}>
          <CardPlaylist imagem={imagem3} titulo="this is selena gomez" />
          <CardPlaylist imagem={imagem4} titulo="Pop hits" />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CardPlaylist imagem={imagem5} titulo="this is lady gaga" />
          <CardPlaylist imagem={imagem5} titulo="Pop Up" />
        </View>



      </View>
      <View>
          <Text style={{color:'white',fontSize:24,fontFamily:'Inter',fontWeight:700,marginTop:'8%'}}>Álbuns em alta para você</Text>
        </View>
        <ScrollView horizontal style={{flexDirection:"row"}}>
          <Artista/>
          <Artista/>
          <Artista/>
          <Artista/>
          <Artista/>
          <Artista/>
        </ScrollView>
        
    </ScrollView>
  )
}
