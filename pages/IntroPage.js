import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import logo from '../assets/img/asl_logo.png'

function IntroPage(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
        <Image source={logo}/>
        <Text style={styles.textTitle}>Signs-To-Speech</Text>
        <Text style={styles.textInfo}>A Mobile App For Translating Sign Language to Speech Using Convolutional Neural Network.</Text>
    
    <TouchableOpacity 
    style={styles.button}
    onPress = {() => {navigation.navigate("CameraPage")}}
    >
      <Text style={styles.buttonText}>
      Start
      </Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal: 50
  },
  content:{
    
  },
  textTitle:{
    textAlign:'center',
    marginTop: 20,
    fontSize: 20
  },
  textInfo:{
    textAlign: 'center',
    fontSize: 15,
    marginTop:10
  },
  button:{
    backgroundColor: '#AF66DA',
    width: 220,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: 40,
    borderRadius: 6
  },
  buttonText:{
    color: '#fff',
    fontSize: 20
  }
});

export default IntroPage;
