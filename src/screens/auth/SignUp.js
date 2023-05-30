import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from "react-native";

import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SingUp = () => {

    const navigation = useNavigation();

    const onChangeNumber = () =>{
        //
    }

    return(
        <View style = {styles.container}>
            <Image source={require('../../asset/lifex.png')} style = {styles.img}/>

            <Text style={styles.signup}>Sign Up</Text>

            <Text style={styles.labeltext}>Enter Your Full Name</Text>
            <TextInput
                style = {styles.text1}
                onChangeText={onChangeNumber}
            />

            <Text style={styles.phone}>Phone Number</Text>
            <TouchableOpacity style={[styles.phonetxt, styles.elevation]}>
                <Text style = {styles.ph}>+95</Text>
            </TouchableOpacity>


            <TextInput 
                style = {styles.phonetxt1}
            />

            <Text style={styles.passlabel}>Password</Text>
            <TextInput
                style={styles.passinput}
            />

            <Text style={styles.confirmpasslabel}>Confirm Password</Text>
            <TextInput
                style = {styles.confirmpassinput}
            />

            <TouchableOpacity style={styles.btn} onPress={() =>navigation.navigate('Otp')}>
                <Text style={styles.btntxt}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.privacy}>By sign up, you agree our Terms and Conditions.</Text>

            <Text style={styles.alsignin}>Already have an account? Sign in</Text>
        </View>
    );
}


const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: '#E5E5E5',
    }, 

    img : {
        position: "absolute",
        width: windowWidth * 0.3,
        height: windowWidth * 0.3,
        left: windowWidth * 0.35,
        top: windowHeight * 0.05,
    },

    signup: {
        position: "absolute",
        left: windowWidth * 0.04,
        top: windowHeight * 0.22,
        fontFamily: 'Roboto',
        fontSize: windowWidth * 0.06,
        fontStyle: "normal",
        lineHeight: windowHeight * 0.035,
        fontWeight: '600',
        color: '#000000'
    },

    text1 : {
        position: 'absolute',
        borderStyle: 'solid',
        borderColor: '#B5B5B5',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        top: windowHeight * 0.3,
        left: windowWidth * 0.04,
        width: windowWidth * 0.92,
        height: windowHeight * 0.06,
        borderRadius: 3,
    },

    labeltext: {
        position: 'absolute',
        left: windowWidth * 0.04,
        top: windowHeight * 0.26,
        fontFamily: 'Roboto',
        fontSize: windowWidth * 0.04,
        fontWeight: '400',
        lineHeight: windowHeight * 0.045,
        fontStyle: 'normal',
        color: '#000000',
    },

    phone: {
        position: 'absolute',
        left: windowWidth * 0.04,
        top: windowHeight * 0.37,
        fontFamily: 'Roboto',
        fontSize: windowWidth * 0.04,
        fontWeight: '400',
        lineHeight: windowHeight * 0.045,
        fontStyle: 'normal',
        color: '#000000',
    },

    phonetxt: {
        position: 'absolute',
        width: windowWidth * 0.2,
        height: windowHeight * 0.06,
        left: windowWidth * 0.04,
        top: windowHeight * 0.41,
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
        width: windowWidth * 0.68,
        height: windowHeight * 0.06,
        left: windowWidth * 0.28,
        top: windowHeight * 0.41,
        borderStyle: 'solid',
        borderColor: '#B5B5B5',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderRadius: 3,
        
    },

    passlabel: {
        position: 'absolute',
        left: windowWidth * 0.04,
        right: windowWidth * 0.5881,
        top: windowHeight * 0.48,
        fontFamily: 'Roboto',
        fontSize: windowWidth * 0.04,
        fontWeight: '400',
        lineHeight: windowHeight * 0.045,
        fontStyle: 'normal',
        color: '#000000',
    },

    passinput: {
        position: 'absolute',
        borderStyle: 'solid',
        borderColor: '#B5B5B5',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        top: windowHeight * 0.52,
        left: windowWidth * 0.04,
        width: windowWidth * 0.92,
        height: windowHeight * 0.06,
        borderRadius: 3,
    },

    confirmpasslabel : {
        position: 'absolute',
        left: windowWidth * 0.04,
        top: windowHeight * 0.59,
        fontFamily: 'Roboto',
        fontSize: windowWidth * 0.04,
        fontWeight: '400',
        lineHeight: windowHeight * 0.045,
        fontStyle: 'normal',
        color: '#000000',
    },

    confirmpassinput : {
        position: 'absolute',
        borderStyle: 'solid',
        borderColor: '#B5B5B5',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        top: windowHeight * 0.63,
        left: windowWidth * 0.04,
        width: windowWidth * 0.92,
        height: windowHeight * 0.06,
        borderRadius: 3,
    },

    btn: {
        left: windowWidth * 0.25,
        top: windowHeight * 0.72,
        width: windowWidth * 0.5,
        height: windowHeight * 0.07,
        backgroundColor: '#00A8FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: windowWidth * 0.02
    },

    btntxt: {
        fontSize: windowWidth * 0.05,
        fontWeight: 'bold',
        color: '#ffffff',
    },

    privacy: {
        position: "absolute",
        left: windowWidth * 0.5 - (windowWidth * 0.8) / 2, // Center horizontally
        top: windowHeight * 0.8, // 68.4% of window height
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: windowWidth * 0.035, // 3.5% of window width
        lineHeight: windowHeight * 0.028, // Same as height
        textAlign: "center",
        color: "#5B5B5B",
    },

    alsignin: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: windowWidth * 0.03,
        textAlign: 'center',
        lineHeight: windowWidth * 0.035,
        color: '#000000',
        top: windowHeight * 0.85,
      },

      elevation: {
        elevation: 25,
        shadowColor: '#6D6D6D',
      },

});

export default SingUp;

