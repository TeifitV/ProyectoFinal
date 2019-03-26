import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './HomeStyles';

export default class Home extends Component {

  goToHome(){
    this.props.navigation.navigate('Tasks');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={ require('./../../images/remindMe-lLogo.png') }></Image>
        <TouchableOpacity style={styles.button} onPress={ this.goToHome.bind(this) }>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </TouchableOpacity>
        <Image source={ require('./../../images/avatars.png')}></Image>
      </View>
    );
  }
}


