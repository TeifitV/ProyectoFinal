

import React,{ Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  ImageBackground,
  StyleSheet,
  Platform
} from 'react-native';

import Colors from './../../theme/colors';
import DatePicker from 'react-native-datepicker';
export default class TaskModal extends Component{
  constructor(props){
    super(props)
    currentDate=new Date()
    this.state={
      taskText:'',
      date: currentDate
    }
  }

  addTask(){
    if(this.state.taskText !== ''){
      this.props.addTask(this.state.taskText);
    }else{
      //TODO: show an alert to the user!
    }
  }

  render() {

    return (
     <View style={styles.modalContainer}>
        <View style={styles.wrapperContainer}>
          <ImageBackground source={require('./../../images/pattern.png')}  style={styles.headerContainer}>
            <Text style={styles.headerText}>   AGREGAR TAREA</Text >

              </ImageBackground>
          <View style={styles.bodyContainer}>
              <Text style={styles.addTaskText}></Text>
              <TextInput
                style={styles.inputText}
                placeholder="Agregar Tarea"
                onChangeText={ (text) => this.setState({taskText: text}) }/>
                
               <DatePicker
                style={{width: 300}}
                date={this.state.date}
                mode="date"
                format="DD-MMM-YYYY"
                androidMode="spinner"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
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
                }}
                onDateChange={(date) => {this.setState({date: date})}}
              />
              <TouchableHighlight
                style={styles.addButton}
                underlayColor={Colors.touchableHover}
                onPress={ ()=> { this.addTask() } }>
                <Text style={styles.addButtonText}>AGREGAR</Text>
              </TouchableHighlight>
              { Platform.OS === 'ios' &&
                <TouchableHighlight
                  style={styles.cancelButton}
                  underlayColor={Colors.touchableHover}
                  onPress={ ()=>{ this.props.closeAddTaskModal() } }>
                  <Text style={styles.cancelButtonText}>CANCELAR</Text>
                </TouchableHighlight>
              }
          </View>
        </View>
      </View>
    );
  }
}



// TODO: Create Theme styles (Buttons, Global Components, etc) so it can be imported on each component as required.
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
