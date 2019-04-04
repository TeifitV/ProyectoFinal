import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './TaskItemStyles';



export default class TaskItem extends Component {

  render(){
    const { id, title, completed, onUpdateTask, date } = this.props;
    const styleText = completed ? styles.checked : styles.unchecked;
    const styleDate = completed ? styles.dayChecked : styles.dayUnchecked;
    const styleMonth = completed ? styles.monthChecked : styles.monthUnchecked;
    const styleContainer = completed ? styles.containerChecked : styles.container;

    const taskDate = new Object(new Date(date));
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC' ];

    const monthText = months[taskDate.getMonth()];
    const dayText = taskDate.getDate();
    
    return (
      <TouchableOpacity style={styleContainer} onPress={ () => onUpdateTask(id) } >
        <View>
          <Text style = {styleDate}> {dayText} </Text> 
          <Text style = {styleMonth}> {monthText} </Text>
        </View>
        <Text style={styleText}>{title}</Text>
      </TouchableOpacity>
    )
  }
}