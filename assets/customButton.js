import {TouchableOpacity, StyleSheet, View} from 'react-native'

const Button = (props) => {

  return(
    <View>
      <TouchableOpacity style={style.loginRegisterButton} onPress={props.loginRegisterpress}>{props.loginRegister}</TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  loginRegisterButton : {
    backgroundColor:'grey',
    color:'white',
    width:'25vw',
    margin:'0 auto',
    marginTop:'10vh',
    padding:'2vh',
    textAlign:'center',
  }
})

export default Button;