import React from 'react'
import { SafeAreaView, View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native'

const GetStarted = ({navigation}) => {

    const handleOnPress = () => {
        navigation.navigate('Welcome')
    }
    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.logoContainer}>
               <Image source = {require('../../assets/codetrainlogo.png')}
                style = {styles.image}></Image>
            </View>
            
            <View style = {styles.contacts}>
                <Text style = {styles.contactsText}>CODETRAIN</Text>
                <Text style = {styles.contactsText}>CONTACTS</Text>
            </View>

            <TouchableOpacity style = {styles.getStarted} onPress = {handleOnPress}>
                <Text style = {styles.getStartedText}>GET STARTED</Text>
                <View style = {styles.redLine}></View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginHorizontal : 30
    },

    logoContainer : {
        flex : 0.3,
        justifyContent : 'center',
        alignItems : 'center',
    },

    image : {
        width : 300,
        height : 50
    },

    contacts : {
        flex : 0.4,
        justifyContent : 'center',
        alignItems : 'center',
    },

    contactsText : {
        fontSize : 30,
        fontWeight : '300',
        marginVertical : 5
    },

    getStarted : {
        flex : 0.3,
        justifyContent : 'center',
        alignItems : 'center'
    },

    getStartedText : {
        fontSize : 25,
        fontWeight : '300'
    },

    redLine : {
        marginLeft : 20,
        width : 130,
        height : 2,
        backgroundColor : '#b30000'
    }

})