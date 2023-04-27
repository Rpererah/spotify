import Home from "../screens/Home";
import ListaFavoritos from "../screens/ListaFavoritos";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function StackTeste() {
const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="ListaFavoritos" component={ListaFavoritos} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }