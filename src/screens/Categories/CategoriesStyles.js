import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#ED184A',
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
    },
     rectangle: {
      height: '40%',
      width: '45%',
      borderRadius: 15,
      backgroundColor: '#FFF',
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