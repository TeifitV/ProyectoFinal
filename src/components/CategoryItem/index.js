import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from './CatItemStyle';



export default class CategoryItem extends Component {


  goToTaskScreen(){
    this.props.goToTask();
}


  render(){
    const {id,title,img} = this.props;
    //icon = require
    return (
        <TouchableOpacity style={styles.rectangle} onPress={ this.goToTaskScreen.bind(this) }>
            <Image style={styles.categoryIcon} source={img}/>
            <Text style={styles.categoria}>{title}</Text>
        </TouchableOpacity>

    )
  }
}

