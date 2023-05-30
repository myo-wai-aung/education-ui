import React from "react";
import { Image, Text, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";



const Welcome = () => {
  const navigation = useNavigation();

    return (
        <View style = {styles.container}>
            <Image source={require('../../asset/lifex.png')} style={styles.image}/>

            <View style={styles.box}>
                <Text style={styles.text}> Sign Up With Mobile Phone</Text>
                <Text style={styles.p}>Corem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </View>
            

          <TouchableOpacity style = {styles.btn} onPress={()=>navigation.navigate('SignUp')}>
            <Text style={styles.btntext}>Sign up with Mobile Phone</Text>
          </TouchableOpacity>

          <Text style={styles.already}>
            Already have an account? 
            Sign in
            
          </Text>
    
        </View>)
    }
    
    const styles = StyleSheet.create({
    
      
        container : {
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#E5E5E5'
        },

        box: {
            justifyContent: 'center',
            alignItems: 'center',
            top: 200,
        },

        image: {
          width: 160,
          height: 160,
          top: 162,
        },

        text :{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: 20,
          lineHeight: 30,
          color: '#000000'
          
        },

        p: {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: 12,
          lineHeight: 22,
          alignItems: 'center',
          color: '#000000',
          top: 10,
        },


        btn: {
          top:300,
          
          height:56,
          width: 350,
          backgroundColor: 'background: rgba(241, 246, 251, 1)',
          justifyContent: "center",
          alignItems: 'center',
          borderRadius: 12,
          borderColor: '#F1F6FB',
          borderWidth: 1,
          borderStyle: 'solid',
        },

        btntext: {
          fontFamily: 'Roboto',
          fontSize: 14,
          fontWeight: '500',
          lineHeight: 16,
          color: '#000000',
        },


        already: {
          fontSize: 12,
          fontWeight: '400',
          top: 450
        }

      
    });  
    
    export default Welcome