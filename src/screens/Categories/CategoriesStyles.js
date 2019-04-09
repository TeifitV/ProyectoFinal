import {StyleSheet} from 'react-native';
import Colors from './../../theme/colors';

const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: Colors.primaryColor,
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
     baseCopy: {
       height: '100%',
       width: '100%',
       justifyContent: 'center',
       alignItems: 'center',
       flex: 1,
   },
     logo: {
      width: '90%',
      height: '10%',
      marginTop: 40,
      alignItems: 'center',
    },

    table: {
      marginTop: 60,
      marginLeft: 10,
      marginRight: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      flex: 1,
    }
  });

export default styles;