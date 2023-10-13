import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './screens/Home';
import Map from './screens/Map';
import Web from './screens/Web';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator  initialRouteName="Home"
  activeColor="#FFC100"
  inactiveColor="#FFEAAE"
  barStyle={{ backgroundColor: '#0A0903' }}>
      <Tab.Screen name="Home" component={Home}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
         <Tab.Screen name="Web" component={Web}  options={{
          tabBarLabel: 'Web',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="web" color={color} size={26} />
          ),
        }} />
         <Tab.Screen name="Map" component={Map}  options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Profile" component={Profile}  options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
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
