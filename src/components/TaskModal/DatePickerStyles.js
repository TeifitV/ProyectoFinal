import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
      modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.5)'
      },
      wrapperContainer: {
        backgroundColor: 'white',
        height: 567,
      },
      headerContainer:{
        width:'100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryColorDarker

      },
      headerText:{
        width: 300,
        fontFamily: 'Roboto',
        color: Colors.white,
        fontSize: 30,
        textAlign: 'center'
       
      },
      bodyContainer: {
        flex: 1,
        height: 315,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
      },
      addTaskText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        textAlign: 'center'
      },
      inputText:{
        width: 300,
        fontFamily: 'Roboto',
        fontSize: 30,
        textAlign: 'center',
        borderBottomWidth: Platform.OS === 'ios' ? 2 : 0,
        borderBottomColor: Colors.separator
      },
      addButton: {
          width: 325,
          height: 55,
          paddingTop: 15,
          borderRadius: 27,
          borderStyle: 'solid',
          borderWidth: 2,
          backgroundColor: Colors.primaryColorDarker,
          borderColor: Colors.primaryColorDarker
      },
      addButtonText: {
        fontFamily: 'Roboto',
        textAlign: 'center',
        fontSize: 17,
        color: 'white'
      },
      cancelButton: {
          width: 325,
          height: 55,
          paddingTop: 15,
          borderRadius: 27,
          borderStyle: 'solid',
          borderWidth: 2,
          backgroundColor: 'white',
          borderColor: Colors.primaryColorDarker
      },
      cancelButtonText: {
        fontFamily: 'Roboto',
        textAlign: 'center',
        fontSize: 17,
        color: Colors.primaryColorDarker
      }
  });

  const datePickerStyles from StyleSheet.create({
      dateIcon: {
        position: 'center',
        left: 0,
        top: 4,
        marginLeft: 0
      },
      dateInput: {
        borderColor:'transparent',
        marginLeft: 0
      }
    });
export default styles;