import React, {Component} from 'react';
import { View , TouchableOpacity, StyleSheet, Text, Modal, Image } from 'react-native';
import styles from './TasksStyles';
import TaskHeader from './../../components/TaskHeader';
import TasksList from './../../components/TasksList';
import TaskModal from '../../components/TaskModal';
import AddTaskButton from '../../components/AddTaskButton';

export default class Tasks extends Component {

    constructor(props){
        super(props);
        this.state = {
            tasks: [
                { id: 1, title: 'Sacar la basura', completed: true },
                { id: 2, title: 'Paga colegiatura', completed: false },
                { id: 3, title: 'Comprar cervezas', completed: false },
                { id: 4, title: 'Sacar al perro', completed: false },
                { id: 5, title: 'Comprar croquetas', completed: false }
            ],
            showAddTaskModal: false
        }
    }

    openAddTaskModal(){
        this.setState({showAddTaskModal: true});
    }

    closeAddTaskModal(){
        this.setState({showAddTaskModal: false});
    }

    addTask(text){
        const newTask = { title: text, completed: false, id: this.state.tasks.length + 1 };
        this.setState({ tasks: [newTask, ...this.state.tasks] });
        this.closeAddTaskModal();
    }

    updateTask(taskId) {
        const {tasks = []} = this.state;
        const tasksList = tasks.map( task => {
            return task.id === taskId
                        ? {...task, completed: !task.completed }
                        : {...task}
        });
        this.setState({tasks: tasksList});
    }

    render(){
        const { tasks = [], showAddTaskModal=false } = this.state;
        return(
            <View style={styles.container}>
                <TaskHeader tasks={tasks} />
                <TasksList tasks={tasks} onUpdateTask={this.updateTask.bind(this)}/>
                <Modal
                    visible={showAddTaskModal}
                    transparent={true}
                    animationType={'slide'}
                    onRequestClose={this.closeAddTaskModal.bind(this)}>
                    <TaskModal
                        closeAddTaskModal={this.closeAddTaskModal.bind(this)}
                        addTask={this.addTask.bind(this)}
                    />
                </Modal>
                <AddTaskButton openAddTaskModal={this.openAddTaskModal.bind(this)}/>
            </View>
        )
    }
}