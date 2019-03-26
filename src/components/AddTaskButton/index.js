import React, {Component} from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './AddTaskButtonStyles';

export default class AddTaskButton extends Component {

    render(){
        const { openAddTaskModal } = this.props;
        return(
          <TouchableOpacity style = {styles.container} onPress={ () => openAddTaskModal() }>
            <Image style= {styles.icon} source={require('./../../images/icon-plus.png')}/>
          </TouchableOpacity>
        )
    }
}

