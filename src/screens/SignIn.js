import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import Input from '../components/Input'
import MyButton from '../components/MyButton'
import PasswordInput from '../components/PasswordInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SignIn = ({navigation}) => {

    const handleSignIn = () => {
        navigation.navigate('CODETRAIN')
    }

    return (
        <KeyboardAwareScrollView>
            <SafeAreaView style = {styles.container}>
                <View style = {styles.imageContainer}>
                    <Image source = {require('../../assets/coverphoto.jpeg')} style = {styles.image}></Image>
                </View>

                <View style = {styles.inputContainer}>
                    <Input label = 'Email' placeholder = 'mamhonyah@gmail.com' require/>
                    <PasswordInput label = 'Password'  placeholder = '.......'/>
                </View>

                <View style = {styles.buttonContainer}>
                    <MyButton buttonText = 'SIGN IN' onPress = {handleSignIn}/>
                </View>

                <View style = {styles.forgotPassword}>
                    <Text style = {styles.text}>Forgot? </Text>
                        <View><Text style = {styles.text}>Reset Password</Text>
                        <View style = {styles.redLine}></View>
                    </View>
                    
                </View>

            </SafeAreaView>
        </KeyboardAwareScrollView>
        
    )
}

export default SignIn

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },

    imageContainer : {
        flex : 0.5
    },

    image : {
        width : 380,
        height : 220
    },

    inputContainer : {
        flex : 0.2,
        marginHorizontal : 15,
        marginVertical : 40
    },

    buttonContainer : {
        flex : 0.1,
        marginHorizontal : 15
    },

    forgotPassword : {
        flex : 0.3,
        marginHorizontal : 15,
        marginVertical : 30,
        flexDirection : 'row',

    },

    text : {
        fontSize : 15
    },

    redLine : {
        width : 100,
        height : 2,
        backgroundColor : '#b30000',
        marginTop : 5
    },
})

