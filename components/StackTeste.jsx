import { View } from "react-native";
import Home from "../screens/Home";
import ListaFavoritos from "../screens/ListaFavoritos";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BarraMusica from "./BarraMusica/BarraMusica";

export default function StackTeste() {
const Stack = createNativeStackNavigator();

    return (
      <View style={{flex: 1, height: '100%'}}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="ListaFavoritos" component={ListaFavoritos} options={{ headerShown: false }} />
      </Stack.Navigator>
      <BarraMusica/>

      </View>
    )
  }