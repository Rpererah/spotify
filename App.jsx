import React from 'react';
import { View, Text, StatusBar, Button, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabsTeste from './components/TabsTeste';
const alturaDaStatusBar = StatusBar.currentHeight;


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="black" />
      <TabsTeste />
    </NavigationContainer>
  )
}






