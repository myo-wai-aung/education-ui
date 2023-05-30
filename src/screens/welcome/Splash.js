import React from "react";
import { Image, StatusBar, StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

const StartScreen = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={'#E5E5E5'} />
            <TouchableOpacity onPress={() => navigation.navigate('Continue')}  >

                <Image source={require('../../asset/lifex.png')} style = {styles.img}/>
                
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',
        alignItems: 'center'
    },

    img: {
        width: width * 0.4, // 60% of the screen width
        height: width * 0.4, // 60% of the screen width
    }
})

export default StartScreen