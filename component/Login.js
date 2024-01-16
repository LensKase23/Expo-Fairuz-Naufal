import { Text, View, StyleSheet, Image, TextInput, SafeAreaView } from 'react-native';

import Textu from "../assets/customText"
import Input from "../assets/customTextInput"
import Button from "../assets/customButton"

const Login = ({navigation}) => {

  const handleHomepage = () => {
    navigation.navigate('Homepage')
  }

  return(
    <View>
      <Textu header="Login"/>
      <SafeAreaView style={style.loginBox}>
        <Textu text="Username"/>
        <Input input="Ur name"/>
        <Textu text="Password"/>
        <Input input="********"/>
      </SafeAreaView>
      <Button loginRegister="Login" loginRegisterpress={handleHomepage}/>
    </View>
  )
}

const style = StyleSheet.create({
  loginBox: {
    width:'75%',
    margin:'auto',
  }
})

export default Login;