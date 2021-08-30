import React, {useState , useEffect}from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ImageBackground, Text} from 'react-native'
import Input from '../components/Input'
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const Register = () => {

    const [image, setImage] = useState(null);

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
  
    return (
        <View style={styles.pickerContainer}>
            <ImageBackground source={{ uri: image }} style={{ width: 400, height: 210 }}> 
                <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.pickerContainer}>
                        <AntDesign name = "user" size = {50} color = "red" />
                        <Text onPress={pickImage} style = {styles.text}>ADD PROFILE PHOTO</Text>
                        {image && <Image />}
                        
                    </TouchableOpacity>
                </View>
                    
             
            </ImageBackground>
        </View>
        
    )
}

export default Register

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginHorizontal : 20
    },

    pickerContainer : {
        flex : 0.3,
        justifyContent : 'center',
        alignItems : 'center',
        
    },

    text : {
        marginVertical : 10,
        color : 'red', 
        fontSize : 15
    }
})
