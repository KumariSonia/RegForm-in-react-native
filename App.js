import React from 'react';
import Address from './app/Address';
import Register from './app/Register';
import Users from './app/Users';
import YourInfo from './app/YourInfo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import color from './app/color';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Users' screenOptions={{

        headerTintColor: color.primary,
        headerTitleStyle: {
          color: color.primary,
          fontWeight: 'bold',
          fontSize: 30,

        },
        headerTitleAlign: 'center'
      }}>
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Your Info" component={YourInfo} />
        <Stack.Screen name="Your Address" component={Address} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


