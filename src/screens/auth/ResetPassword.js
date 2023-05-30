import React from "react";
import { Text, View , TouchableOpacity, StyleSheet, TextInput, Alert } from "react-native";


const Showlert = () =>{
    Alert.alert(
        ' ',
        'Password Reset Successful.',
        [
          {
            text: 'Ok',
            style: 'cancel',
          },
        ],
        
    );
};


const ResetPassword = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Reset Password
            </Text>

            <Text style={styles.passwordlabel}>New Password</Text>
            <TextInput  style={styles.password}/>

            <Text style={styles.confirmlabel}>Confirm Password</Text>
            <TextInput  style={styles.confirm}/>


            <TouchableOpacity style={styles.btn} onPress={Showlert}>
                <Text style={styles.btntxt}>Reset Password</Text>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
     container: {
        flex:  1,
        backgroundColor: '#D0EFFF',
     },

     text: {
        top: 41,
        left: 21,
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 28,
        color: '#000000',
        position: "absolute"
     },

     passwordlabel: {
        position: 'absolute',
        left: 21,
        top: 100,
        position: 'absolute',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 16,
        color: '#000000'
     },

     confirmlabel: {
        position: 'absolute',
        left: 21,
        top: 200,
        position: 'absolute',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 16,
        color: '#000000'
     },

     password: {
        position: 'absolute',
        top:125,
        left: 21,
        height: 50,
        width: 350,
        backgroundColor: '#FFFFFF',
        borderColor: '#B5B5B5',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5
     },

     confirm: {
        position: 'absolute',
        top:225,
        left: 21,
        height: 50,
        width: 350,
        backgroundColor: '#FFFFFF',
        borderColor: '#B5B5B5',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5
     },

     btn: {
        position: 'absolute',
        width: 160,
        height: 60,
        left: 22,
        top: 300,
        backgroundColor: '#03254C',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
     },

     btntxt: {
        position: 'absolute',
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontStyle: 'normal',
        lineHeight: 19,
        fontWeight: '600'
    }

});


export default ResetPassword;