import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Camera } from 'react-native-pytorch-core';
import classifyImage from '../assets/classifier-model/ImageClassifier';
import captureIcon from '../assets/img/camera_ic.png';
import speakIcon from '../assets/img/speak_ic.png';
import undoIcon from '../assets/img/undo_ic.png';
import infoIcon from '../assets/img/info_ic.png';

import {useNavigation} from '@react-navigation/native';

// import { Camera } from 'react-native-pytorch-core';

export default function CameraPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={{zIndex: 10}}         
      onPress={() => {
          navigation.navigate('AboutPage');
        }}>
      <Image
        style={styles.info}
        source={infoIcon}
      />
      </TouchableOpacity>
      <Camera style={styles.camera} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Nice to meet you...</Text>
      </View>
      <View style={styles.actions}>
        <View style={styles.action}>
          <Image source={speakIcon} />
          <Text>Speak</Text>
        </View>
        <View style={styles.action}>
          <Image source={captureIcon} />
          <Text>Capture</Text>
        </View>
        <View style={styles.action}>
          <Image source={undoIcon} />
          <Text>Undo</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    backgroundColor: '#000000',
    height: '60%',
  },
  textContainer: {
    padding: 20,
  },
  text: {
    fontSize: 17,
    color: '#050505',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
    marginBottom: 20,
  },
  action: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
    margin: 10,
  },
});
