import React from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Otp = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Phone Number Verify</Text>

            <Text style={styles.p}>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</Text>
            <Text style={styles.otptext}>Enter OTP code</Text>

            
            <TextInput 
                style={styles.input1}
            />

            <TextInput 
                style={styles.input2}
            />

            <TextInput 
                style={styles.input3}
            />

            <TextInput 
                style={styles.input4}
            />

            <TextInput 
                style={styles.input5}
            />

            <TextInput 
                style={styles.input6}
            />

            <Text style={styles.aa}>Your Otp code will expire in </Text>
            <View style={styles.second}>
                <Text >60s</Text>
            </View>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.verifytxt}>Verify</Text>
            </TouchableOpacity>
            <StatusBar hidden />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#E5E5E5',
    },

    header: {
        position: 'absolute',
        left: 21,
        top: 50,
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: 600,
        lineHeight: 28,
        color: '#000000'
    },

    p: {
        position: "absolute",
        left: 21,
        width: 350,
        top: 90,
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        color: '#000000'
    },

    otptext: {
        left: 23,
        top: 170,
        fontSize: 14,
    },

    input1: {
        position: 'absolute',
        width: 44,
        height: 44,
        borderColor: '#B5B5B5',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#ffffff',
        left: 23,
        top: 200
    },

    input2: {
        position: 'absolute',
        width: 44,
        height: 44,
        borderColor: '#B5B5B5',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#ffffff',
        left: 77,
        top: 200
    },

    input3: {
        position: 'absolute',
        width: 44,
        height: 44,
        borderColor: '#B5B5B5',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#ffffff',
        left: 131,
        top: 200
    },

    input4: {
        position: 'absolute',
        width: 44,
        height: 44,
        borderColor: '#B5B5B5',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#ffffff',
        left: 185,
        top: 200
    },

    input5: {
        position: 'absolute',
        width: 44,
        height: 44,
        borderColor: '#B5B5B5',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#ffffff',
        left: 239,
        top: 200
    },

    input6: {
        position: 'absolute',
        width: 44,
        height: 44,
        borderColor: '#B5B5B5',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#ffffff',
        left: 293,
        top: 200
    },

    aa: {
        position: 'absolute',
        fontSize: 10,
        fontWeight: '600',
        lineHeight: 12,
        top: 290,
        left: 23
    },

    second : {
        position: 'absolute',
        width: 30,
        height: 30,
        left: 150,
        top: 280,
        borderStyle: 'solid',
        justifyContent:"center",
        alignItems: 'center',
        backgroundColor: '#D9D9D9'
    },

    btn: {
        height: 60,
        left: 20,
        width: 320,
        top: 310,
        backgroundColor: '#03254C',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    verifytxt: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 16,
        color: '#fff'
    }
});

export default Otp;
