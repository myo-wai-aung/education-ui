import React from "react";
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ForgotPassword = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Image source={require('../../asset/lifex.png')}  style={styles.img}/>
            <Text style={styles.text}>Forgot Password</Text>
            <Text style={styles.p}>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</Text>
            <Text style={styles.label}>Phone Number</Text>

            <TouchableOpacity style={[styles.phonetxt]}>
                <Text style = {styles.ph}>+95</Text>
            </TouchableOpacity>


            <TextInput 
                style = {styles.phonetxt1}
            />

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ResetPassword')}>
                <Text style={styles.btntxt}>Enter</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D0EFFF',
    },

    img: {
        position: 'absolute',
        width: 140,
        height: 140,
        top: 105,
        left: 110,
    },

    text: {
        top: 269,
        left: 21,
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 28,
        color: '#000000',
        position: "absolute"
    },

    p: {
        left: 21,
        top: 312,
        position: 'absolute',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        color: '#000000',
        width: 350
    },

    label: {
        left: 21,
        top: 380,
        position: 'absolute',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 16,
        color: '#000000'
    },

    phonetxt: {
        position: 'absolute',
        width: 70,
        height: 50,
        left: 21,
        top: 406,
        borderStyle: 'solid',
        borderColor: '#B5B5B5',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    ph:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 26,
        fontSize: 22,
        color: '#000000'
    },

    phonetxt1: {
        position: 'absolute',
        width: 260,
        height: 50,
        left: 99,
        top: 406,
        borderStyle: 'solid',
        borderColor: '#B5B5B5',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderRadius: 3,
        
    },

    btn: {
        position: 'absolute',
        width: 340,
        height: 60,
        top: 476,
        backgroundColor: '#03254C',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        left: 21
    },

    btntxt : {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 26,
        fontSize: 14,
        color: '#FFFFFF'
    },

    

})

export default ForgotPassword;

