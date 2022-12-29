import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import logo from './assets/img/asl_logo.png';

import IntroPage from './pages/IntroPage';
import CameraPage from './pages/CameraPage';
import AboutPage from './pages/AboutPage';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'fade'}}>
        <Stack.Screen name="IntroPage" component={IntroPage} />
        <Stack.Screen name="CameraPage" component={CameraPage} />
        <Stack.Screen name="AboutPage" component={AboutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  content: {},
  textTitle: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },
  textInfo: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#AF66DA',
    width: 220,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: 40,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default App;
