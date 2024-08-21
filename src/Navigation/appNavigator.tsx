import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import { Screen3 } from '../screen/Screen3';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Acceder" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}