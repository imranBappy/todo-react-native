
import HomeScreen from './Screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import { useEffect, useState } from 'react';
export const COLORS = { primary: '#1f145c', white: '#FFF' }



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    // <LoginScreen />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

