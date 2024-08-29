import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FIcon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text
          style={{
            fontFamily: 'Mulish',
            fontSize: 27,
            fontWeight: 'bold',
            letterSpacing: 1,
            color: '#000',
          }}>
          Hello!
        </Text>
        <Text
          style={{
            fontFamily: 'Mulish',
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: 1,
            color: '#707B81',
          }}>
          Welcome Back You’ve Been Missed!
        </Text>
      </View>

      <View>
        <View>
          <Text style={styles.text}>Email</Text>
          <TextInput
            placeholder="Enter Your Email"
            style={styles.input}
            placeholderTextColor={'#000'}
          />
        </View>
        <View>
          <Text style={styles.text_1}>Password</Text>
          <TextInput
            placeholder="Enter Your Password"
            style={styles.input_1}
            secureTextEntry={true}
            placeholderTextColor={'#000'}
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('RecoveryPassword')}>
            <Text style={styles.text_2}>Recovery Password</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.button_1}>
          <FIcon name="google" style={styles.icon_1} />
          <Text style={{left: 45}}>Sign In With Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.text_3}>
        <Text style={{color: '#707B81', fontSize: 12, fontWeight: 400}}>
          Don’t have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{color: '#000', fontSize: 12, fontWeight: 500, left: 5}}>
            Sign Up for free
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },

  heading: {
    top: 70,
    left: 23,
  },
  input: {
    width: 320,
    borderWidth: 2,
    borderColor: '#000',
    top: 130,
    left: 20,
    borderRadius: 20,
    paddingLeft: 15,
  },
  text: {
    top: 120,
    left: 30,
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input_1: {
    width: 320,
    borderWidth: 2,
    borderColor: '#000',
    top: 170,
    left: 20,
    borderRadius: 20,
    paddingLeft: 15,
  },
  text_1: {
    top: 160,
    left: 30,
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text_2: {
    top: 180,
    left: 200,
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    top: 210,
    width: 300,
    height: 55,
    left: 40,
    backgroundColor: '#FF4E6E',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    top: 15,
  },
  button_1: {
    height: 45,
    top: 250,
    flexDirection: 'row',
    left: 80,
    alignItems: 'center',
  },
  icon_1: {
    color: '#000',
    fontSize: 25,
    left: 30,
  },
  text_3: {
    top: 310,
    left: 90,
    flexDirection: 'row',
  },
});
