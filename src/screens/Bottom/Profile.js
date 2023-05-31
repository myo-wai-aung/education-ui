import React from "react";
import { StyleSheet, Text, View } from "react-native";



const Profile = () => {
    return(
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex : 1,
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default Profile