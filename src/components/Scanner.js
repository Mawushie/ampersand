import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'


const Scanner = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const handleClick = () => {
        navigation.navigate('CODETRAIN')
    }
  
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
        navigation.navigate('Member Profile')
      setScanned(true);
    //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <View style={styles.container}>
          <View  style = {styles.scanner}>
            <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>
            <View style = {styles.border}>
            </View>

            <View style = {styles.scanQRContainer}>
                <Text style = {styles.text3}>Want to share your contact?</Text>
                <TouchableOpacity style = {styles.scanQR} onPress = {handleClick}>
                    <Text style = {styles.text4}>Send QR</Text>
                </TouchableOpacity>
            </View>
       
      </View>
    );
  }


export default Scanner

const styles = StyleSheet.create({
    container : {
        flex : 1
    },

    scanner : {
        flex : 0.9,
    },

    border : {
        width : '100%',
        height : 1,
        backgroundColor : 'lightgrey'
    },

    scanQRContainer : {
        flex : 0.1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginHorizontal : 40,
        marginVertical : 12,
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
