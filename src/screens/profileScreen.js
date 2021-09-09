import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import Profile from '../components/Profile'
import { Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'

const profileScreen = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.imageContainer}>
                <Profile name = 'Mawushie Honyah' jobDescription = 'Software Developer' 
                                image = {require('../../assets/me.jpg')}
                                />
            </View>
            
            <View>
                <View style = {styles.iconContainer}>
                    <Entypo name="twitter-with-circle" size={36} color="#4d4d4d" style = {styles.socials} />
                    <Entypo name="linkedin-with-circle" size={36} color="#4d4d4d" />
                </View>
                

                <View style = {styles.details}>
                    <Ionicons name="call-outline" size={14} color="black"  style = {styles.icons}/>
                    <Text style = {styles.texts}>+233 (240) 222 555</Text>
                </View>

                <View style = {styles.details}>
                    <SimpleLineIcons name="envelope" size={14} color="black" style = {styles.icons}/>
                    <Text style = {styles.texts}>matilda@codetrain.com</Text>
                </View>

                <View style = {styles.details}>
                    <EvilIcons name="location" size={20} color="black" style = {styles.icons}/>
                    <Text style = {styles.texts}>Accra, Ghana</Text>
                </View>

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
   },

   imageContainer : {
       flex : 0.2
   },

   socials : {
       paddingRight : 10
   }, 

   iconContainer : {
       flexDirection : 'row',
       marginVertical : 30,
   },


   icons : {
        paddingRight: 10,
   },

   details : {
       flexDirection : 'row',
       marginVertical : 12,
   },

   texts : {
       fontSize : 16,
   }

})