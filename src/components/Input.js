import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
    return (
        <View>
            <View  style = {styles.inputContainer}>
                <Text style = {styles.inputText}>{props.label}</Text>

                <TextInput style = {styles.inputText2} placeholder = {props.placeholder}
                    />
            
            </View>

            <View style = {styles.thinLine}></View>
        </View>
        
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },

    inputText : {
        fontSize : 18
    },

    inputText2 : {
        fontSize : 18
    },

    thinLine : {
        width : '100%',
        height : 1,
        backgroundColor : 'lightgrey',
        marginVertical : 16
    }
})
