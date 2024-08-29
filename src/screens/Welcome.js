import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MIcon_1 from 'react-native-vector-icons/MaterialCommunityIcons';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text
          style={{
            fontFamily: 'Mulish',
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: 1,
            color: '#fff',
          }}>
          Upskill
        </Text>
        <MIcon_1
          name="arrow-top-right-thin-circle-outline"
          style={styles.icon}
        />
      </View>

      <View style={styles.image}>
        <Image
          source={require('../../assets/first.png')}
          style={styles.first}
        />
      </View>

      <View style={styles.heading_1}>
        <Text
          style={{
            fontFamily: 'Mulish',
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: 1,
            color: '#fff',
          }}>
          Learn Anytime
        </Text>
        <Text
          style={{
            fontFamily: 'Mulish',
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: 1,
            color: '#fff',
          }}>
          And Anywhere
        </Text>
      </View>
      <View style={styles.heading_2}>
        <Text
          style={{
            fontFamily: 'Mulish',
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: 1,
            color: '#fff',
          }}>
          with upskill now adding to your
        </Text>
        <Text
          style={{
            fontFamily: 'Mulish',
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: 1,
            color: '#fff',
          }}>
          skills is much easier
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8EC7FD',
  },
  heading: {
    flexDirection: 'row',
    top: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    left: 10,
    fontSize: 38,
    fontWeight: 800,
    color: '#fff',
  },
  image: {
    top: 160,
    width: 270,
    height: 288,
    left: 70,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  first: {
    left: -40,
    top: -80,
  },
  heading_1: {
    top: 170,
    alignItems: 'center',
    left: 4,
  },
  heading_2: {
    top: 200,
    alignItems: 'center',
  },
  button: {
    top: 250,
    width: 300,
    height: 55,
    left: 60,
    backgroundColor: '#FF4E6E',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    top: 15,
  },
});
