import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import TaskItem from './../TaskItem';

export default class TasksList extends Component {

  renderTasks() {
    const { tasks, onUpdateTask } = this.props;
    return tasks.map( task => {
      return (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          onUpdateTask={onUpdateTask}
        />
      )
    })
  }

  render(){
    return(
      <ScrollView>
        { this.renderTasks() }
      </ScrollView>
    )
  }

}