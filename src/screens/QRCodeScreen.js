import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import Profile from '../components/Profile'
import {QRCode} from 'react-native-custom-qr-codes-expo'


const QRCodeScreen = () => {
    return (
         <View style = {styles.container}>
            <View style = {styles.textContainer}>
                <Text style = {styles.text1}>Exchange Contact Information</Text>
                <Text style = {styles.text2}>Scan this QR below to share your contacts</Text>
            </View>

            <View style = {styles.qrCodeContainer}>
                <QRCode content='https://reactnative.com'/>
            </View>

            <View style = {styles.profileContainer}>
                <Profile name = 'Mawushie Honyah' jobDescription = 'Software Developer' 
                             image = {require('../../assets/me.jpg')}
                            />
            </View>
        

            <View style = {styles.border}>

            </View>

            <View style = {styles.scanQRContainer}>
                <Text style = {styles.text3}>Want to add a new connection?</Text>
                <TouchableOpacity style = {styles.scanQR}>
                    <Text style = {styles.text4}>Scan QR</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default QRCodeScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },

    textContainer : {
        flex : 0.2,
        marginVertical : 40,
        marginHorizontal : 40,
    },

    text1 : {
        fontSize : 18,
        fontWeight : '400',
        marginVertical : 20
    },

    text2 : {
        fontSize : 18,
        color : 'grey'
    },

    qrCodeContainer : {
        flex : 0.4,
        marginHorizontal : 40,
    },

    profileContainer : {
        flex : 0.3,
        marginHorizontal : 40,
        paddingTop : 50,
    },

    scanQRContainer : {
        flex : 0.1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginHorizontal : 40,
        marginVertical : 12,
    },

    border : {
        width : '100%',
        height : 1,
        backgroundColor : 'lightgrey'
    },

    text3 : {
        fontSize : 16,
    },

    scanQR : {
        width : '25%',
        height : 30,
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 1,
        borderColor :'red',
        borderRadius : 3,  
    },

    text4 : {
        color : 'red',
    }
})
