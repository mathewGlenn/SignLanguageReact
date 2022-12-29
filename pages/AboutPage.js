import React from 'react';

import {Text, View, StyleSheet, Image} from 'react-native';

import logo from '../assets/img/asl_logo.png';
export default function AboutPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <View style={styles.aboutContent}>
        <Image source={logo} style={styles.logo} />
        <Text style={{fontSize: 20, marginTop: 10, color: '#000'}}>
          Signs-To-Speech
        </Text>
        <Text
          style={styles.text}>
          A Mobile App For Translating Sign Language to Speech Using
          Convolutional Neural Network.
        </Text>

        <Text style={{fontSize: 20, marginTop: 30, marginBottom: 10, color: '#000'}}>
          A Thesis Project By: 
        </Text>

        <Text style={styles.text2}> Name 1</Text>
        <Text style ={styles.text2}> Name 2</Text>
        <Text style = {styles.text2}> Name 3</Text>

        <Text
          style={[styles.text, {marginTop:40}]}>
            Isabela State University -- Cauayan City
        </Text>

        <Text
          style={styles.text}>
            A.Y. 2022 - 2023
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    fontSize: 25,
    color: '#000000',
  },
  logo: {
    width: 100,
    height: 100,
  },
  aboutContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  text:{
    fontSize: 15,
    marginTop: 15,
    color: '#000',
    marginHorizontal: 40,
    textAlign: 'center',
  },
  text2:{
    fontSize: 15,
    color: '#000',
    marginHorizontal: 40,
    textAlign: 'center',
  }
});
