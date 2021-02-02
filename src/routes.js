import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Profile from './screens/Profile';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={screenOptions('Artists', '#0b1521')}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={screenOptions('Description', '#90c6f2')}
          name="Profile"
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function screenOptions(title, backgroundColor) {
  return {
    title,
    headerStyle: {
      backgroundColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
};
