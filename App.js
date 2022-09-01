import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Home from './src/screens/Home';
import Reels from './src/screens/Reels';
import Shopping from './src/screens/Shopping';
import User from './src/screens/User';
import Search from './src/screens/Search';
import { SearchBar } from 'react-native-screens';
import axios from 'axios';
const App = () => {

  const Stack = createNativeStackNavigator();
  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false
        }}
      >
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  color={focused ? "black" : "gray"}
                  size={25}
                  name="home"
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  color={focused ? "black" : "gray"}
                  size={25}
                  name="search"
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Reels"
          component={Reels}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  color={focused ? "black" : "gray"}
                  size={25}
                  name="film"
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Shopping"
          component={Shopping}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  color={focused ? "black" : "gray"}
                  size={25}
                  name="shopping-bag"
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="User"
          component={User}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  color={focused ? "black" : "gray"}
                  size={25}
                  name="user"
                />
              );
            },
          }}
        />

      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;