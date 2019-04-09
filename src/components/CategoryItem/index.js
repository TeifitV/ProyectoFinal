import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from './CatItemStyle';

export default class CategoryItem extends Component {
  goToTaskScreen(category){
    this.props.goToTask(category);
  }
  render(){
    const {title,category} = this.props;
    const images = {
      work: require('./../../images/category-work.png'),
      school: require('./../../images/category-school.png'),
      home: require('./../../images/category-home.png'),
      friends: require('./../../images/category-friends.png')
    }
    const image = images[category];
    return (
        <TouchableOpacity style={styles.rectangle} onPress={ () => this.goToTaskScreen(category) }>
            <Image style={styles.categoryIcon} source={image}/>
            <Text style={styles.categoria}>{title}</Text>
        </TouchableOpacity>
    )
  }
}

