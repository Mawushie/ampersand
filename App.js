import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, TouchableOpacity, } from 'react-native';
import GetStarted from './src/screens/GetStarted';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './src/screens/Welcome';
import Register from './src/screens/Register';
import SignIn from './src/screens/SignIn';
import profileScreen from './src/screens/profileScreen';
import { AntDesign } from '@expo/vector-icons';
import QRCodeScreen from './src/screens/QRCodeScreen';
import Scanner from './src/components/Scanner';
import MemberProfile from './src/screens/MemberProfile';
import { FontAwesome } from '@expo/vector-icons'

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer style = {styles.container}>
      <Stack.Navigator>
        <Stack.Screen  options = { { header : () => null} } name = 'Get Started' component = {GetStarted}/>
        <Stack.Screen  options = { { header : () => null} } name = 'Welcome' component = {Welcome}/>
        <Stack.Screen  options = {({navigation}) =>{
                          return { 
                                  headerStyle : { backgroundColor : 'red' , height : 120 }, 
                                     headerTintColor: '#fff',
                                    headerTitleStyle: {
                                      fontSize: 18,
                                    },
                                    headerLeft : () => (
                                      <TouchableOpacity>
                                          <FontAwesome name="long-arrow-left" size={24} color="white" 
                                          style = {{marginLeft : 25}}
                                          onPress = {() =>navigation.navigate('Welcome')}
                                          />
                                      </TouchableOpacity>
                                      
                                    )}
                                  }
                                } 
                       name = 'Register' component = {Register}/>

        <Stack.Screen options = {({navigation}) => {
                        return {
                                   headerStyle : { backgroundColor : 'red' , height : 120 }, 
                                     headerTintColor: '#fff',
                                    headerTitleStyle: {
                                      fontSize: 18,
                                    },
                                    headerLeft : ({}) => (
                                      <TouchableOpacity>
                                          <FontAwesome name="long-arrow-left" size={24} color="white" 
                                          style = {{marginLeft : 25}}
                                          onPress = {() =>navigation.navigate('Welcome')}/>
                                      </TouchableOpacity>
                                      
                                    )}
                                  } 
                                }           
                        name = 'SignIn' component = {SignIn}/>

        <Stack.Screen options = {({navigation}) =>{
                      return {
                        headerStyle : { backgroundColor : 'red', height : 120},
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
                        },
                        headerLeft : () => null
                        }
                       }
                      }               
                        name = 'CODETRAIN' component = {QRCodeScreen}/>
         <Stack.Screen options = {({navigation}) => {
                      return { 
                        headerStyle : { backgroundColor : 'red' , height : 120 }, 
                                     headerTintColor: '#fff',
                                    headerTitleStyle: {
                                      fontSize: 18,
                                    },
                                    headerLeft : ({}) => (
                                      <TouchableOpacity>
                                          <FontAwesome name="long-arrow-left" size={24} color="white" 
                                          style = {{marginLeft : 25}}
                                          onPress = {() =>navigation.navigate('CODETRAIN')}/>
                                      </TouchableOpacity>
                                      
                                    )}
                                  }
                                }
                        name = 'My Profile' component = {profileScreen}/>
          
          <Stack.Screen options = {({navigation}) => {
                      return { 
                        headerStyle : { backgroundColor : 'red' , height : 120 }, 
                                     headerTintColor: '#fff',
                                    headerTitleStyle: {
                                      fontSize: 18,
                                    },
                                    headerLeft : ({}) => (
                                      <TouchableOpacity>
                                          <FontAwesome name="long-arrow-left" size={24} color="white" 
                                          style = {{marginLeft : 25}}
                                          onPress = {() =>navigation.navigate('Scanner')}/>
                                      </TouchableOpacity>
                                      
                                    )}
                                  }
                            }
                        name = 'Member Profile' component = {MemberProfile}/>

        <Stack.Screen  options = { { header : () => null} } name = 'Scanner' component = {Scanner}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
