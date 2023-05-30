import React from "react";
import { StyleSheet, Text, View , Image, TouchableOpacity, Dimensions} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get('window');

const Continue = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Image source={require('../../asset/lifex.png')} style={styles.img}/>

            <View style={styles.box}>
                <Text style={styles.header}>Welcome</Text>
                <Text style= {styles.p}>Corem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </View>


            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Welcome')}>
                <Text style={styles.btntext}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',
        alignItems: 'center',
    },

    img: {
        width: width * 0.4, 
        height: width * 0.4,
    },

    box: {
        justifyContent:"center",
        alignItems: 'center',
    },

    header: {
        fontSize: width * 0.07, 
        fontWeight: '500',
        lineHeight: width * 0.1, 
        textAlign: 'center',
        marginTop: 0
    },

    p: {
        fontSize: width * 0.04, 
        fontWeight: '400',
        lineHeight: width * 0.06, 
        textAlign: 'center',
        marginHorizontal: 20,
    },

    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: width * 0.12, 
        width: width * 0.9, 
        backgroundColor: '#1167B1',
        borderRadius: 8,
        marginTop: 190,
    },

    btntext: {
        fontSize: width * 0.05,
        fontWeight: '500',
        lineHeight: width * 0.06,
        color: '#fff',
    }
})


export default Continue
