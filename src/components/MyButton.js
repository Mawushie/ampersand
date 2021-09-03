import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'

const MyButton = (props) => {
    return (
        <View>
            <TouchableOpacity style = {styles.myButton} onPress = {props.onPress}>
                <Text style = {styles.buttonText}>{props.buttonText}</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default MyButton

const styles = StyleSheet.create({
    myButton : {
        width : '100%',
        height  : 50,
        backgroundColor : 'red',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 5,
    },

    buttonText : {
        fontSize : 18,
        color : 'white'
    }
})
