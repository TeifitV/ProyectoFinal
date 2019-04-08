import React, {Component} from 'react';
import {View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './CategoriesStyles';
import CategoryItem from './../../components/CategoryItem';

export default class Categories extends Component {
  constructor(props){
        super(props);
        this.state = {
            categories: [
                { id: 1, title: 'TRABAJO',img: require('./../../images/category-work.png')},
                { id: 2, title: 'ESCUELA',img: require('./../../images/category-school.png')},
                { id: 3, title: 'HOGAR',img: require('./../../images/category-home.png')},
                { id: 4, title: 'AMIGOS',img: require('./../../images/category-friends.png')}
            ],
        }
    }

     renderCat() {
    const {categories} = this.state;
    return categories.map(category => {
      return (
        <CategoryItem
          key={category.id}
          id={category.id}
          title={category.title}
          img={category.img}
          goToTask ={this.goToTask.bind(this)}
        />
      )
    })
  }

  goToTask(){

      this.props.navigation.navigate('Tasks');
  }

  render(){
    return(

       <View style={styles.container}>

        <ImageBackground style={styles.baseCopy} source={ require('./../../images/pattern.png') }>
           <Image style={styles.logo} source={ require('./../../images/remindMe-lLogo.png') }></Image>

            <View style={styles.table}>
             { this.renderCat() }


           </View>
        </ImageBackground>
      </View>



    );
  }

}






