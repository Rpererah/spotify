import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackTeste from './StackTeste';
import Search from '../screens/Search'
import YourLibrary from '../screens/YourLibrary'
import Premium from '../screens/Premium'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function  TabsTeste() {
const Tab = createBottomTabNavigator();

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