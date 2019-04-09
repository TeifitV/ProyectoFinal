

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
import styles, {datePickerStyles} from './DatePickerStyles.js';
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
      this.props.addTask(this.state.taskText,this.state.date);
    }else{
      //TODO: show an alert to the user!
    }
  }

  render() {
    return (
     <View style={styles.modalContainer}>
        <View style={styles.wrapperContainer}>
          <ImageBackground source={require('./../../images/pattern.png')}  style={styles.headerContainer}>
            <Text style={styles.headerText}>AGREGAR TAREA</Text >
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
                customStyles={
                  datePickerStyles
                }
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
