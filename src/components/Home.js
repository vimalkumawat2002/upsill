import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MIcon_1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Register from '../screens/auth/Register';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: () => {
            return <MIcon_1 name="home" />;
          },
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Home',
          tabBarIcon: () => {
            return <MIcon_1 name="home" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
const Home = () => {
  return (
    <View style={styles.container}>
      <TabScreen style={styles.tab} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  tab: {
    bottom: 0,
  },
});
