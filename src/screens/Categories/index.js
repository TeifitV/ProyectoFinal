import React, {Component} from 'react';
import {View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './CategoriesStyles';

export default class Categories extends Component {

  goToTask(){
   this.props.navigation.navigate('Tasks');
  }

  render() {
    return (
      <View style={styles.container}>

        <ImageBackground style={styles.baseCopy} source={ require('./../../images/pattern.png') }>
           <Image style={styles.logo} source={ require('./../../images/remindMe-lLogo.png') }></Image>

            <View style={styles.table}>
              <TouchableOpacity style={styles.rectangle} onPress={ this.goToTask.bind(this) }>
                <Image style={styles.categoryIcon} source={ require('./../../images/category-work.png') }></Image>
                <Text style={styles.categoria}>TRABAJO</Text>
              </TouchableOpacity>


              <TouchableOpacity style={styles.rectangle} onPress={ this.goToTask.bind(this) }>
                <Image style={styles.categoryIcon} source={ require('./../../images/category-school.png') }></Image>
                <Text style={styles.categoria}>ESCUELA</Text>
              </TouchableOpacity>


              <TouchableOpacity style={styles.rectangle} onPress={ this.goToTask.bind(this) }>
                 <Image style={styles.categoryIcon}  source={ require('./../../images/category-home.png') }></Image>
                 <Text style={styles.categoria}>HOGAR</Text>
              </TouchableOpacity>


              <TouchableOpacity style={styles.rectangle} onPress={ this.goToTask.bind(this) }>
                <Image style={styles.categoryIcon} source={ require('./../../images/category-friends.png') }></Image>
                <Text style={styles.categoria}>AMIGOS</Text>
              </TouchableOpacity>
           </View>

          
        </ImageBackground>
      </View>
    );
  }
}
