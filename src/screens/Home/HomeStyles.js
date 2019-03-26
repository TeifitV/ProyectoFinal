import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ED184A',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      width: 285,
      height: 75,
      marginTop: 100
    },
    button: {
      width: 325,
      height: 55,
      backgroundColor: '#ED184A',
      borderColor: '#FFF',
      borderWidth: 2,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFF',
      fontSize: 17
    }
  });

export default styles;