import { TextInput, View, StyleSheet } from 'react-native';

const Input = (props) => {
  return(
    <View>
      <TextInput style={styles.Input} placeholder={props.input} />
      <TextInput style={styles.Password}>{props.password}</TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  Input : {
    height:'5vh',
    borderWidth: 3,
    padding:'2vh',
  },
  Password : {

  }
})

export default Input;