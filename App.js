import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetStarted from './src/screens/GetStarted';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './src/screens/Welcome';
import Register from './src/screens/Register';
import SignIn from './src/screens/SignIn';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer style = {styles.container}>
      <Stack.Navigator>
        <Stack.Screen  options = { { header : () => null} } name = 'Get Started' component = {GetStarted}/>
        <Stack.Screen  options = { { header : () => null} } name = 'Welcome' component = {Welcome}/>
        <Stack.Screen  options = { { headerStyle : { backgroundColor : 'red' , height : 120}}}  
                       name = 'Register' component = {Register}/>
        <Stack.Screen name = 'SignIn' component = {SignIn}/>
      </Stack.Navigator>
      

    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
