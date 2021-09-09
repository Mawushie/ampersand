import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import Profile from '../components/Profile'

const profileScreen = () => {
    return (
        <View style = {styles.container}>
            <View>
                <Text>Hello</Text>
            </View>
        </View>
    )
}

export default profileScreen

const styles = StyleSheet.create({
   container : {
       flex : 1,
       marginHorizontal : 40,
       marginVertical : 50,
   }
})