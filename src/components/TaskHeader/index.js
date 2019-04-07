import React, {Component} from 'react';
import {View, ImageBackground, Text } from 'react-native';
import styles from './TasksStyles';
import { calculateUncompletedTasks, getParseDate} from './tasksUtils';

class TaskHeader extends Component {

    getUncompletedTasks() {
        return calculateUncompletedTasks(this.props.tasks);
    }
    
    getParseDate() {
        return getParseDate();
    }

    render(){
        const {category} = this.props;
        return(
            <View style={styles.container}>
                <ImageBackground source={ require('./../../../assets/pattern.png') } style={styles.background} >
                    
                    <View>
                    <Text style={styles.toDo}>{category}</Text>
                        <Text style={styles.toDo}>{this.getUncompletedTasks()} Pendientes</Text>
                        <Text style={styles.date}>{this.getParseDate()}</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default TaskHeader;