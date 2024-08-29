import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FIcon from "react-native-vector-icons/FontAwesome"


const RecoveryPassword = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.heading}>
                <Text style={{ fontFamily: "Mulish", fontSize: 27, fontWeight: 'bold', letterSpacing: 1, color: "#000", left: 50 }}>Recovery Password</Text>
                <Text style={{ fontFamily: "Mulish", fontSize: 16, fontWeight: 500, letterSpacing: 1, color: "#707B81", left: 50 }}>Please Enter Your Email Address </Text>
                <Text style={{ fontFamily: "Mulish", fontSize: 16, fontWeight: 500, letterSpacing: 1, color: "#707B81", left: 60 }}>To Recieve a Verification Code</Text>
            </View>

            <View>
                <View>
                    <Text style={styles.text}>Email</Text>
                    <TextInput placeholder='Enter Your Email' style={styles.input} />
                </View>

            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Countine</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default RecoveryPassword

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff"

    },

    heading: {
        top: 70,
        left: 23,
    },
    input: {
        width: 320,
        borderWidth: 1,
        borderColor: "#000",
        top: 130,
        left: 20,
        borderRadius: 20,
        paddingLeft: 15,
    },
    text: {
        top: 120,
        left: 20,
        color: "#000",
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        top: 200,
        width: 300,
        height: 55,
        left: 40,
        backgroundColor: "#FF4E6E",
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
        top: 15,
    },

})