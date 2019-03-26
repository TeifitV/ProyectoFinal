import React, { Component } from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './TaskItemStyles';


export default class TaskItem extends Component {

  render(){
    const { id, title, completed, onUpdateTask } = this.props;
    const icon = completed ? require('./../../images/icon-checked.png') : require('./../../images/icon-circle.png');
    console.log(this.props);
    return (
      <TouchableOpacity style={styles.container} onPress={ () => onUpdateTask(id) } >
        <Image style={styles.icon} source={icon}/>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    )
  }
}