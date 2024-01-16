import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Header} from 'react-native';

import Button from "../assets/customButton"

const Homepage= ({navigation})=> {

  const style = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'black',
    },
    image:{
      borderRadius: '10px',
      margin: '5vw',
    },
    header:{
      fontWeight: '500',
      fontSize: '20px',
      margin: '5vh 0',
      color:'white',
      fontFamily: 'EB_Garamond',
    },
    text:{
      color:'white',
      textAlign:'justify',
      margin: '5vw'
    },
    buttonLike: {
      backgroundColor: 'blue',
      color:'white',
      margin: 10,
      height: 20,
      width: 60,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#D4D3D1',
      alignSelf: 'center',
    },
  })

  const handleLogin = () => {
    navigation.navigate('Login')
  }

  const handleRegister = () => {
    navigation.navigate('Register')
  }

  const [jumlah, setJumlah] = useState(0);

  return(
    <View style={style.background}>
    <Button loginRegister="Login" loginRegisterpress={handleLogin}/>
    <Button loginRegister="Register" loginRegisterpress={handleRegister}/>
    <Text style={style.header}>LensKase (Fairuz Naufal)</Text>
      <Image source={require('.././assets/Lens-profile-dashboard.jpg')} style={style.image} />
      <TouchableOpacity
              style={style.buttonLike}
              onPress={() => setJumlah(jumlah + 1)}>
              <Text> like {jumlah} </Text>
            </TouchableOpacity>
      <Text style={style.text}>Yo, My codename is LensKase, but you can call me Lens. Because why not? I'am a Animator Minecraft 3D, i have an Experience Animating and VFX using Mine-imator, i have another talent too, making a website using a HTML and CSS, and it's responsive. You can see using a Dekstop or Handphone</Text>
    </View>
  )
}

export default Homepage;