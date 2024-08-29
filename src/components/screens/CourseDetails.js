import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CourseDetails = () => {
  return (
    <>
      <View style={styles.toptext}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}> UI/UX Design </Text>
      </View>

      <View
        style={{
          backgroundColor: '#8EC7FD',
          width: '80%',
          height: 250,
          marginLeft: 30,
          borderRadius: 30,
          marginTop: 10,
        }}>
        <Image
          source={require('../../../assets/banner3.png')}
          style={{marginLeft: 20}}
        />
      </View>
      <View style={styles.text_1}>
        <Text style={{fontWeight: 'bold'}}> Free </Text>
      </View>

      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 20}}>
          {' '}
          About the Course
        </Text>
        <Text style={{marginLeft: 20, fontWeight: 'bold'}}>
          {' '}
          Dive into the world of UI/UX design with our comprehensive online
          course. Learn the principles, tools, and techniques that will empower
          you to create user-friendly, visually appealing digital experiences.
          From wireframing to user testing, this course covers it all, helping
          you become a skilled UI/UX designer.{' '}
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={styles.tab_1}>
          <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
            {' '}
            10+ Videos
          </Text>
        </View>

        <View style={styles.tab_2}>
          <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
            {' '}
            Certified
          </Text>
        </View>
        <View style={styles.tab_3}>
          <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
            {' '}
            Free E- Book i am working here
          </Text>
        </View>
      </View>

      <View style={styles.bottomtext}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: 'white',
            textAlign: 'center',
            padding: 10,
          }}>
          {' '}
          Get Course{' '}
        </Text>
      </View>
    </>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  toptext: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    color: 'darkblack',
  },
  text_1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 270,
    marginTop: 10,
    backgroundColor: '#FF4E6E',
    width: 70,
    borderRadius: 30,
  },
  tab_1: {
    backgroundColor: '#FF4E6E',
    width: 100,
    height: 40,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 20,
  },
  tab_2: {
    backgroundColor: '#FF4E6E',
    width: 100,
    height: 40,
    marginLeft: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  tab_3: {
    backgroundColor: '#FF4E6E',
    width: 130,
    height: 40,
    marginLeft: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  bottomtext: {
    marginTop: 210,
    marginLeft: 70,
    backgroundColor: '#FF4E6E',
    width: 250,
    height: 50,
    borderRadius: 30,
  },
});
