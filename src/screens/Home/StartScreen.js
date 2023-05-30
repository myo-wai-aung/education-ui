import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, Modal, Button } from "react-native";
import Swiper from "react-native-swiper";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


const StartScreen = () => {

    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
  
    const openModal = () => {
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
    };


    return(
        <View style={styles.container}>

            <Image source={require('../../asset/lifex.png')} style={styles.lifex}/>
            
            <Swiper autoplay={true} style={styles.slider}>
                <View style={styles.slide}>
                    <Image source={require('../../asset/slider1.png')} style={styles.image}/>
                </View>

                <View style={styles.slide}>
                    <Image source={require('../../asset/slider2.png')} style={styles.image}/>
                </View>

                <View style={styles.slide}>
                    <Image source={require('../../asset/slider3.png')} style={styles.image}/>
                </View>
            </Swiper>

            <Text style={styles.header1}>To Explore all Activities</Text>
            <Text style={styles.term}>Terms & Conditions </Text>
            <Text style={styles.aa}>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</Text>

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.btn1} onPress={openModal}>
                    <Text style={styles.text1}>Start Try Preminum Features</Text>
                    <Text style={styles.text2}>To Unlock all features</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.text1}>Start Free Trial</Text>
                    <Text style={styles.text2}>Start try Free trial 14 days.</Text>
                </TouchableOpacity>
            </View>



            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >

            <View style={styles.box}>
                <TouchableOpacity  onPress={closeModal}>
                    <Text style={styles.symbol}>&times;</Text>
                </TouchableOpacity>
                <Text style={styles.header}>Preminum Features</Text>


                <Text style={styles.free}>Free</Text>
                <Text style={styles.preminum}>Preminum</Text>

                <View style={styles.line} />

                <View>
                    <Text style={[styles.pre,{top: 120} ]}>Unlimited access to all classes</Text>
                    <Text style={[styles.cross, { top: 105, color: '#00A8FF'}]}>&#x2713;</Text>
                    <Text style={[styles.check, {top: 105}]}>&#x2713;</Text>

                    <Text style={[styles.pre,{top: 160} ]}>Unlimited access to all books</Text>
                    <Text style={[styles.cross, { top: 145}]}>&times;</Text>
                    <Text style={[styles.check, {top: 145}]}>&#x2713;</Text>

                    <Text style={[styles.pre,{top: 200} ]}>Unlimited access to all audio</Text>
                    <Text style={[styles.cross, { top: 185}]}>&times;</Text>
                    <Text style={[styles.check, {top: 185}]}>&#x2713;</Text>

                    <Text style={[styles.pre,{top: 240} ]}>Offline download</Text>
                    <Text style={[styles.cross, { top: 225}]}>&times;</Text>
                    <Text style={[styles.check, {top: 225}]}>&#x2713;</Text>

                </View>

                <TouchableOpacity style={[styles.btn, {top:290}]}>
                    <Text style={[styles.btntext]}>3 Month</Text>
                    <Text style={[styles.btntext2]}>10000 MMK</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn, {top: 310}]}>
                    <Text style={[styles.btntext]}>6 Month</Text>
                    <Text style={[styles.btntext2]}>10000 MMK</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn, {top: 330}]}>
                    <Text style={[styles.btntext]}>Yearly</Text>
                    <Text style={[styles.btntext2]}>10000 MMK</Text>
                </TouchableOpacity>
            </View>

      </Modal>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(208, 239, 255, 0)'
    },

    lifex: {
        width:100,
        height: 100,
        left: 130,
        top: 20,
        position: 'absolute',
    },

    bottom: {
        position: 'absolute',
        top: 552,
        width: '100%',
        height: '70%',
        backgroundColor: '#1167B1',
       
    },

    btn1: {
        width : 350,
        height: 60,
        backgroundColor: '#2A9DF4',
        borderRadius: 10,
        position: 'absolute',
        top: 40,
        left: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btn2: {
        width : 350,
        height: 60,
        backgroundColor: '#2A9DF4',
        borderRadius: 10,
        position: 'absolute',
        top: 135,
        left: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text1: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: 24,
        color: '#FFFFFF'
    },

    text2: {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 24,
        color: '#FFFFFF'
    },

    slider: {
        left: 45,
        top: 120,
        position: "absolute",
        justifyContent: 'center',
        alignItems: 'center'
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },

    image: {
        width: 300,
        height: 320,
        borderRadius: 10
    },

    header1: {
        position: 'absolute',
        left: 100,
        top: 450,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 24,
        textAlign: 'center',
        color: '#000000'
    },

    term: {
        position: 'absolute',
        left: 25,
        top: 480,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 24,
        textAlign: 'center',
        color: '#000000'
    },

    aa: {
        position: 'absolute',
        left: 30,
        top: 510,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
        textAlign: 'center',
        width: 350,
    },

    //Modal css



    box: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        height: 720,
        width: '100%',
        top: 20,
    } ,

    header: {
        left: 100,
        top: 45,
        position: 'absolute',
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 21,
        color: '#1167B1'
    },

    free : {
        left: 240,
        top: 109,
        position: 'absolute',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 16,
        color: '#000000'

    },

    preminum: {
        left: 300,
        top: 109,
        position: 'absolute',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 16,
        color: '#000000'
    },

    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        top: 90
    },

    symbol: {
        fontSize:40,
        left: 350,
        top: 5,
        color: '#000000'
    },

    pre: {

        left: 20,
        fontSize: 15,
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontStyle:'normal',
        color:'#000000',
        position: 'absolute'
    },

    cross: {
        left: 250,
        fontSize: 30,
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontStyle:'normal',
        color:'#000000',
        position:'absolute'
    },

    check : {
        left: 320,
        fontSize: 30,
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontStyle:'normal',
        color:'#000000',
        position:'absolute',
        color: '#00A8FF'
    },


    btn: {
        width:350,
        height: 84,
        left: 14,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'rgba(24, 126, 180, 0.81)'
    },

    btntext: {
        left: 30,
        top: 10,
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 18,
        color: '#FFFFFF'
    },

    btntext2: {
        left: 210,
        top: -15,
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 18,
        color: '#FFFFFF',
    }

});


export default StartScreen;
