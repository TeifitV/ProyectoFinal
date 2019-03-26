import React, {Component} from 'react';
import {View, ImageBackground, Image, Text } from 'react-native';
import styles from './TasksStyles';
import { calculateUncompletedTasks, getParseDate } from './tasksUtils';

class TaskHeader extends Component {

    getUncompletedTasks() {
        return calculateUncompletedTasks(this.props.tasks);
    }
    
    getParseDate() {
        return getParseDate();
    }

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={ require('./../../images/tasks-bg.jpg') } style={styles.background} blurRadius={15}>
                    <Image source={ require('./../../images/user-avatar.png') } style={styles.avatar}></Image>
                    <View>
                        <Text style={styles.toDo}>{this.getUncompletedTasks()} Pendientes</Text>
                        <Text style={styles.date}>{this.getParseDate()}</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default TaskHeader;