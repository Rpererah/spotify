import { StatusBar, Text, View } from "react-native";

export default function Premium() {
  const alturaDaStatusBar = StatusBar.currentHeight;
    return (
      <View style={{ backgroundColor: 'black', flex: 1, marginTop: alturaDaStatusBar }}>
        <Text style={{ color: 'white' }}>Premium</Text>
      </View>
    )
  }