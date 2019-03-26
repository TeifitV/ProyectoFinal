import { StyleSheet } from 'react-native';
import colors from './../../theme/colors';

const stylesButtonAdd = StyleSheet.create({
  container: {
      width: 71,
      height: 71,
      borderRadius: 71,
      backgroundColor: colors.primaryColor,
      position: 'absolute',
      right: 10,
      bottom: 10,
      justifyContent: 'center',
      alignItems: 'center'
  },
  icon: {
      width: 30,
      height: 30
  }

})

export default stylesButtonAdd;