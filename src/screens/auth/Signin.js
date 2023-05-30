import React from "react";
import { View,Text, StatusBar, Image, StyleSheet,Dimensions, TouchableOpacity,TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Signin = () => {

    const navigation = useNavigation();
    return(
        <View>
            <Image source={require('../../asset/lifex.png')} style={styles.image}/>

            <Text style={styles.signup}>Sign In</Text>

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
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forget}>
                    <Text >Forgot Password!</Text>
            </TouchableOpacity>
            

            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('StartScreen')}>
                <Text style={styles.text}>Sign In</Text>
            </TouchableOpacity>

            <StatusBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#D0EFFF',
    },

    image: {
        position: 'absolute',
        width: 140,
        height: 140,
        left: 120,
        top: 90,
    },

    signup: {
        position: "absolute",
        left: windowWidth * 0.04,
        top: windowHeight * 0.35,
        fontFamily: 'Roboto',
        fontSize: windowWidth * 0.06,
        fontStyle: "normal",
        lineHeight: windowHeight * 0.035,
        fontWeight: '600',
        color: '#000000'
    },

    phone: {
        position: 'absolute',
        left: windowWidth * 0.04,
        top: windowHeight * 0.40,
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
        top: windowHeight * 0.45,
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
        top: windowHeight * 0.45,
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
        top: windowHeight * 0.53,
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
        top: windowHeight * 0.58,
        left: windowWidth * 0.04,
        width: windowWidth * 0.92,
        height: windowHeight * 0.06,
        borderRadius: 3,
    },

    forget: {
        position: 'absolute',
        left: 21,
        top: 530,
        fontFamily: 'Roboto',
        fontSize: 12,
        fontStyle: 'normal',
        lineHeight: 21,
        color: '#00479A',
    },

    btn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 20,
        top: 570,
        backgroundColor: '#03254C',
        borderRadius: 8,
        height: 60,
        width:350,
    },

    text: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19,
        color: '#fff'
    }

})

export default Signin;
