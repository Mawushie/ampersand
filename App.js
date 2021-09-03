import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GetStarted from './src/screens/GetStarted';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './src/screens/Welcome';
import Register from './src/screens/Register';
import SignIn from './src/screens/SignIn';
import profileScreen from './src/screens/profileScreen';
import { AntDesign } from '@expo/vector-icons';
import QRCodeScreen from './src/screens/QRCodeScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer style = {styles.container}>
      <Stack.Navigator>
        <Stack.Screen  options = { { header : () => null} } name = 'Get Started' component = {GetStarted}/>
        <Stack.Screen  options = { { header : () => null} } name = 'Welcome' component = {Welcome}/>
        <Stack.Screen  options = { { headerStyle : { backgroundColor : 'red' , height : 120 }, 
                                     headerTintColor: '#fff',
                                    headerTitleStyle: {
                                      fontSize: 18,
                                    },}
                                  }  
                       name = 'Register' component = {Register}/>
        <Stack.Screen options = { { headerStyle : { backgroundColor : 'red' , height : 120 }, 
                                     headerTintColor: '#fff',
                                    headerTitleStyle: {
                                      fontSize: 18,
                                    },}
                                  }
                        name = 'SignIn' component = {SignIn}/>

        <Stack.Screen options = {({navigation}) =>{
                      return{
                        headerStyle : {backgroundColor : 'red', height : 120},
                                       headerTintColor : 'white',
                                       headerTitleStyle: {
                                        fontSize: 18,
                                      },
                        headerRight : () =>{
                          return (
                            <TouchableOpacity onPress = {() => navigation.navigate('My Profile')}
                              style = {{marginRight : 25}}>
                             <AntDesign name = "user" size = {20} color = "white" />
                            </TouchableOpacity>
                          )
                        }
                      }
         }
        }               
                        name = 'CODETRAIN' component = {QRCodeScreen}/>
         <Stack.Screen name = 'My Profile' component = {profileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
