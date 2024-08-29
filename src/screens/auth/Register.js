import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FIcon from "react-native-vector-icons/FontAwesome"

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <FIcon name="chevron-left" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.heading}>
        <Text style={{ fontFamily: "Mulish", fontSize: 22, fontWeight: 'bold', letterSpacing: 1, color: "#000", left: 100, }}>Create Account</Text>
        <Text style={{ fontFamily: "Mulish", fontSize: 12, fontWeight: 500, letterSpacing: 1, color: "#707B81", left: 90, }}>Let’s Create Account Together</Text>
      </View>

      <View>
        <View>
          <Text style={styles.text}>Name</Text>
          <TextInput placeholder='Enter Your Name' style={styles.input} placeholderTextColor={"#000"} />
        </View>
        <View>
          <Text style={styles.text_1}>Email</Text>
          <TextInput placeholder='Enter Your Email' style={styles.input_1} placeholderTextColor={"#000"} />
        </View>
        <View>
          <Text style={styles.text_2}>Password</Text>
          <TextInput placeholder='Enter Your Password' style={styles.input_2} secureTextEntry={true} placeholderTextColor={"#000"} />
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('RecoveryPassword')}>
            <Text style={styles.text_3}>Recovery Password</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.button_1}>
          <FIcon name='google' style={styles.icon_1} />
          <Text style={{ left: 45, }}>Sign Up With Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.text_4}>
        <Text style={{ color: "#707B81", fontSize: 12, fontWeight: 400 }}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: "#000", fontSize: 12, fontWeight: 500, left: 5 }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff"

  },
  icon: {
    fontSize: 30,
    color: "#000",
    top: 30,
    left: 20,
  },
  heading: {
    top: 70,
    left: 23,
  },
  input: {
    width: 320,
    borderWidth: 2,
    borderColor: "#000",
    top: 130,
    left: 20,
    borderRadius: 20,
    paddingLeft: 15,
  },
  text: {
    top: 120,
    left: 30,
    color: "#000",
    fontSize: 18,
    fontWeight: 'bold',
  },
  input_1: {
    width: 320,
    borderWidth: 2,
    borderColor: "#000",
    top: 160,
    left: 20,
    borderRadius: 20,
    paddingLeft: 15,
  },
  text_1: {
    top: 150,
    left: 30,
    color: "#000",
    fontSize: 18,
    fontWeight: 'bold',
  },
  input_2: {
    width: 320,
    borderWidth: 2,
    borderColor: "#000",
    top: 190,
    left: 20,
    borderRadius: 20,
    paddingLeft: 15,
  },
  text_2: {
    top: 180,
    left: 30,
    color: "#000",
    fontSize: 18,
    fontWeight: 'bold',
  },
  text_3: {
    top: 200,
    left: 200,
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    top: 230,
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
    top: 15,
  },
  button_1: {
    height: 45,
    top: 280,
    flexDirection: "row",
    left: 80,
    alignItems: "center",
  },
  icon_1: {
    color: "#000",
    fontSize: 25,
    left: 30,
  },
  text_4: {
    top: 330,
    left: 90,
    flexDirection: "row"
  }
})