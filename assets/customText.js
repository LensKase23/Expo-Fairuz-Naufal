import { Text, View, StyleSheet } from 'react-native';

const Textu = (props) => {
  return(
    <View>
      <Text style={styles.Header}>{props.header}</Text>
      <Text style={styles.Text}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Header: {
    margin:'0 auto',
    marginTop:'5vh',
    fontWeight:'700',
    fontSize:'7.5vw',
  },
  Text : {
    paddingLeft:'2vh',
  }
})

export default Textu;