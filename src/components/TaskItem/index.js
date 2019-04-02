import React, { Component } from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './TaskItemStyles';
import Helper from './../../shared/Helper';


export default class TaskItem extends Component {

  render(){
    const { id, title, completed, onUpdateTask, date } = this.props;
    const styleText = completed ? styles.checked : styles.unchecked;
    const styleDate = completed ? styles.dateChecked : styles.date;
    const styleContainer = completed ? styles.containerChecked : styles.container;

    const helper = new Helper();
    
    return (
      <TouchableOpacity style={styleContainer} onPress={ () => onUpdateTask(id) } >
        <Text style = {styleDate}> {helper.formatDate(date)} </Text> 
        <Text style={styleText}>{title}</Text>
      </TouchableOpacity>
    )
  }
}