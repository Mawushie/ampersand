import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Welcome = ({navigation}) => {

    const handleRegister = () => {
        navigation.navigate('Register')
    }

    const handleSignIn = () => {
        navigation.navigate('SignIn')
    }

    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.imageContainer}>
                <Image source = {require('../../assets/groupphoto.jpeg')} style = {styles.image}></Image>
            </View>

            <View style = {styles.textContainer}>
                <Text style = {styles.text1}>KEEP IN TOUCH WITH THE PEOPLE OF CODETRAIN</Text>
                <Text style = {styles.text2}>Sign in or register with your Codetrain email</Text>
            </View>

            <View style = {styles.registerContainer}>
                <TouchableOpacity onPress = {handleRegister}>
                    <Text style = {styles.text3}>REGISTER</Text>
                    <View style = {styles.redLine}></View>
                </TouchableOpacity>

                <TouchableOpacity onPress = {handleSignIn}>
                    <Text style = {styles.text3}>SIGN IN</Text>
                    <View style = {styles.redLine2}></View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container : {
        flex : 1
    },

    imageContainer : {
        flex : 0.6
    },

    image : {
        width : 380,
        height : 420
    },

    textContainer : {
        flex : 0.3,
        marginHorizontal : 20,
        marginVertical : 5
    },

    text1: {
        fontSize : 18,
        marginVertical : 5
    },

    text2: {
        fontSize : 15,
        marginVertical : 5,
        color : 'grey'
    },

    registerContainer : {
        flex : 0.1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginHorizontal : 50
    },

    redLine : {
        width : 70,
        height : 2,
        backgroundColor : '#b30000',
        marginTop : 5
    },

    redLine2 : {
        width : 60,
        height : 2,
        backgroundColor : '#b30000',
        marginTop : 5
    },

    text3 : {
        fontSize : 17
    }
   
})