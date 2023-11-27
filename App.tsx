import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    'https://picsum.photos/600/1200',
  );

  const changeBackgroundImage = () => {
    setBackgroundImage(
      `https://picsum.photos/600/1200?random=${Math.random()}`,
    );
  };

  return (
    <>
      <ImageBackground style={styles.imgBg} source={{uri: backgroundImage}}>
        <StatusBar backgroundColor={'transparent'} />
        <View style={[styles.container, {backgroundColor: 'transparent'}]}>
          <TouchableOpacity onPress={changeBackgroundImage}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnTxt}>Press Me</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});

export default App;
