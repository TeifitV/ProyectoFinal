import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './HomeStyles';

export default class Home extends Component {

  goToHome(){
    this.props.navigation.navigate('Tasks');
  }

  render() {
    return (
      <ImageBackground source={require('./../../../assets/pattern.png')} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <Image style={styles.logo} source={ require('./../../images/remindMe-lLogo.png') }></Image>
        <TouchableOpacity style={styles.button} onPress={ this.goToHome.bind(this) }>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </TouchableOpacity>
        <Image source={ require('./../../images/avatars.png')}></Image>
      </View>
      </ImageBackground>
    );
  }
}


