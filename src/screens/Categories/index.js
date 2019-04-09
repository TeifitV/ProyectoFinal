import React, {Component} from 'react';
import {View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './CategoriesStyles';
import CategoryItem from './../../components/CategoryItem';

export default class Categories extends Component {
  constructor(props){
        super(props);
        this.state = {
            categories: [
                { id: 1, title: 'TRABAJO',category:'work'},
                { id: 2, title: 'ESCUELA',category: 'school'},
                { id: 3, title: 'HOGAR',category: 'home'},
                { id: 4, title: 'AMIGOS',category: 'friends'}
            ],
        }
    }

  renderCat() {
    const {categories} = this.state;
    return categories.map(category => {
      return (
        <CategoryItem
          title={category.title}
          category={category.category}
          goToTask ={this.goToTask.bind(this)}
        />
      )
    })
  }

  goToTask(category){
      this.props.navigation.navigate('Tasks', {category} );
  }

  render(){
    return(
      <View style={styles.container}>
        <ImageBackground style={styles.baseCopy} source={ require('./../../images/pattern.png') }>
        <Image style={styles.logo} source={ require('./../../images/remindMe-lLogo.png') }></Image>
        <View>
          
          <View style={styles.table}>{ this.renderCat() }</View>
        </View>
        </ImageBackground>
    </View>
      
    );
  }
}






