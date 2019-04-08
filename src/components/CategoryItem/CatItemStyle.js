import {StyleSheet} from 'react-native';
import Colors from './../../theme/colors';
const styles = StyleSheet.create({
	
     rectangle: {
      height: '40%',
      width: '45%',
      borderRadius: 15,
      backgroundColor: Colors.white,
      alignItems: 'center',
      marginBottom: 30,

    },
     categoria: {
      height: 32,
      width: 92,
      color: '#5C5C5C',
      fontSize: 15,
      letterSpacing: 0.33,
      lineHeight: 27,
      textAlign: 'center',
    },
     categoryIcon: {
      height: '80%',
      width: '80%',
    }

});
export default styles;