import {View, SafeAreaView, StyleSheet} from 'react-native'

import Textu from '../assets/customText'
import Input from '../assets/customTextInput'
import Button from '../assets/customButton'

const Register = ({navigation}) => {

  const handleRegister = () => {
    navigation.navigate('Homepage')
  }

  const style = StyleSheet.create({
  registerBox: {
    width:'75%',
    margin:'auto',
  }
})

  return(
    <View>
      <Textu header="Register"/>
      <SafeAreaView style={style.registerBox}>
        <Textu text="Username"/>
        <Input input="Ur name"/>
        <Textu text="Password"/>
        <Input input="********"/>
      </SafeAreaView>
      <Button loginRegister="Register" loginRegisterpress={handleRegister}/>
    </View>
  )
}
export default Register