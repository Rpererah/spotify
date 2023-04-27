import React from 'react';
import { View, Text, StatusBar, Button, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListaFavoritos from './screens/ListaFavoritos';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const alturaDaStatusBar = StatusBar.currentHeight;

export function StackTeste() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="ListaFavoritos" component={ListaFavoritos} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export function TabsTeste() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          borderTopWidth: 0
       },
        tabBarIcon: ({ focused, color, size }) => {

          
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          }
          else if (route.name === 'YourLibrary') {
            iconName = focused ? 'library' : 'library-outline';
          }
          else if (route.name === 'Premium') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'black',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
      })}
      tabBarStyle={{ borderTopWidth: 0 }} 
    >
      <Tab.Screen name="Home" component={StackTeste} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Tab.Screen name="YourLibrary" component={YourLibrary} options={{ headerShown: false }} />
      <Tab.Screen name="Premium" component={Premium} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <TabsTeste />

    </NavigationContainer>
  )
}

export function Home({ navigation }) {
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

export function Search() {
  return (
    <View style={{ backgroundColor: 'black', flex: 1, marginTop: alturaDaStatusBar }}>
      <Text style={{ color: 'white' }}>Search</Text>
    </View>
  )
}

export function YourLibrary() {
  return (
    <View style={{ backgroundColor: 'black', flex: 1, marginTop: alturaDaStatusBar }}>
      <Text style={{ color: 'white' }}>Sua livraria</Text>
    </View>
  )
}
export function Premium() {
  return (
    <View style={{ backgroundColor: 'black', flex: 1, marginTop: alturaDaStatusBar }}>
      <Text style={{ color: 'white' }}>Premium</Text>
    </View>
  )
}