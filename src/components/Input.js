import React from 'react'
import { View, Text, TextInput } from 'react-native'

const Input = (props) => {
    return (
        <View>
            <Text>{props.label}</Text>
            <TextInput>{props.input}</TextInput>
        </View>
    )
}

export default Input
