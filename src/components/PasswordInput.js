import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const PasswordInput = (props) => {
    return (
        <View>
            <View  style = {styles.inputContainer}>
                <Text style = {styles.inputText}>{props.label}</Text>
                <TextInput style = {styles.inputText2} placeholder = {props.placeholder}
                        secureTextEntry={true}
                        textAlign = 'right'/>
    
            </View>

            <View style = {styles.thinLine}></View>
        </View>
        
    )
}

export default PasswordInput

const styles = StyleSheet.create({
    inputContainer : {
        flexDirection : 'row',
    },

    inputText : {
        fontSize : 18
    },

    inputText2 : {
        fontSize : 18,
        flex : 1
    },

    thinLine : {
        width : '100%',
        height : 1,
        backgroundColor : 'lightgrey',
        marginVertical : 16
    }
})
