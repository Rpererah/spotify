import { StatusBar, Text, View } from "react-native";

export default function YourLibrary() {
  const alturaDaStatusBar = StatusBar.currentHeight;
    return (
      <View style={{ backgroundColor: 'black', flex: 1, marginTop: alturaDaStatusBar }}>
        <Text style={{ color: 'white' }}>Sua livraria</Text>
      </View>
    )
  }