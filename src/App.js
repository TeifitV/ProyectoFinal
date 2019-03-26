import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from './screens/Home';
import Tasks from './screens/Tasks';


const Screens = createStackNavigator({
  Home: {
    screen: Home
  },
  Tasks: {
    screen: Tasks
  },
 },{
  headerMode: 'none'
});

export default createAppContainer(Screens);
