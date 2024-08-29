// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/screens/Welcome';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import RecoveryPassword from './src/screens/auth/RecoveryPassword';
import Home from './src/components/Home';
import CourseDetails from './src/components/screens/CourseDetails';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CourseDetails" component={CourseDetails} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;