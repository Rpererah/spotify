import { Text, TouchableOpacity, View,StatusBar } from "react-native";


export default function Home({ navigation }) {
  const alturaDaStatusBar = StatusBar.currentHeight;
    return (
      <View style={{ backgroundColor: 'black', flex: 1, marginTop: alturaDaStatusBar }}>
        
        <Text style={{ color: 'white' }}>Voce esta no text</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ListaFavoritos')}>
      <View style={{ backgroundColor: 'blue',height:'30%',width:'40%', borderRadius:200,justifyContent:'center',alignItems:'center'}}>
      <Text style={{ color: 'white',textAlign:'center' }}>Ir para lista de favorito</Text>
    </View>
  </TouchableOpacity>
  
      
      </View>
    )
  }