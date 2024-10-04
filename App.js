import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import MyNetwork from './screens/MyNetwork';
import Notifications from './screens/Notifications';
import ProfileScreen from './screens/ProfileScreen';
import JourneyScreen from './screens/JourneyScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'My Network') {
            iconName = 'people';
          } else if (route.name === 'Notifications') {
            iconName = 'notifications';
          } else if (route.name === 'Journey'){
            iconName = 'subway';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: '#fff', // Background color of the tab bar
          borderTopWidth: 0, // Remove border
        },
        tabBarActiveTintColor: '#F76C6A', // Active tab icon color
        tabBarInactiveTintColor: 'gray', // Inactive tab icon color
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="My Network" component={MyNetwork} options={{ headerShown: false }} />
      <Tab.Screen name="Notifications" component={Notifications} options={{ headerShown: false }}/>
      <Tab.Screen name="Journey" component={JourneyScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
