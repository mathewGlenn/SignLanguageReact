import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ToastAndroid
} from 'react-native';
import {Camera} from 'react-native-pytorch-core';
import classifyImage from '../component/logic/ImageClassifier';
import captureIcon from '../assets/img/camera_ic.png';
import speakIcon from '../assets/img/speak_ic.png';
import undoIcon from '../assets/img/undo_ic.png';
import infoIcon from '../assets/img/info_ic.png';

import {useNavigation} from '@react-navigation/native';

// import { Camera } from 'react-native-pytorch-core';

const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      25,
      50
    );
    return null;
  }
  return null;
};

export default function CameraPage() {
  const navigation = useNavigation();
  const [words, setWords] = useState('');
  const [visibleToast, setVisibleToast] = useState(false);

  useEffect(() => setVisibleToast(false), [visibleToast]);

  
  async function handleImage(image) {
    const result = await classifyImage(image);

    if(result!="Random"){
      setWords(words + result);
    }else{
      setVisibleToast(true);
    }
    console.log(result)

    //release image from memory
    image.release();
  }

  return (
    <View style={styles.container}>
      <Toast visible={visibleToast} message="Sign not recognized." />
      {/* <TouchableOpacity
        style={{zIndex: 10}}
        onPress={() => {
          navigation.navigate('AboutPage');
        }}>
        <Image style={styles.info} source={infoIcon} />
      </TouchableOpacity> */}
            <View style={styles.textContainer}>
        <Text style={styles.text}>{words}</Text>
      </View>
      <Camera style={styles.camera} onCapture={handleImage} />

      <View style={styles.actions}>
        <View style={styles.action}>
          <Image source={speakIcon} />
          <Text style={styles.textWhite}>Speak</Text>
        </View>

        <TouchableOpacity onPress={()=>{
          setWords(words.slice(0,-1))
        }}>
        <View style={styles.action}>
          <Image source={undoIcon} />
          <Text style={styles.textWhite}>Undo</Text>
        </View>
        </TouchableOpacity>
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
    height: '80%',
  },
  textContainer: {
    padding: 20,
    height:'20%',
    backgroundColor:'#fff',
    width:'100%',
  },
  text: {
    fontSize: 17,
    color: '#050505',
  },
  textWhite: {
    fontSize: 17,
    color: '#fff',
  },
  actions: {
    position: 'absolute',
    start: 0,
    bottom:0,
    marginStart: 20,
    marginEnd:20,
    marginTop: 'auto',
    marginBottom: 20,
    flexDirection: 'column'
  },
  action: {
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
    color:'#fff'
  },
  info: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
    margin: 10,
  },
});
