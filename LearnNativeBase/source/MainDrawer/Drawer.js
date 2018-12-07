/*
import React from 'react'
import { createDrawerNavigator, createAppContainer  } from 'react-navigation';
import One from './Screens/One.js'
import Two from './Screens/Two.js'
import Three from './Screens/Three.js'

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: One,
  },
  Two: {
    screen: Two,
  },
  Three : {
    screen : Three
  },
},
{
  initialRouteName:  'Home', //'AccordionExample'
   //contentComponent: DrawerContainer
}
);
const AppContainer = createAppContainer(MyDrawerNavigator);

export default class Drawer extends React.Component {
  render() {
    return <AppContainer />;
  }
}

*/
import React from 'react'
import { createDrawerNavigator, createAppContainer  } from 'react-navigation';
import LatestNews from './Screens/LatestNews.js'
import NewsOutlets from './Screens/NewsOutlets.js'
import Settings from './Screens/Settings.js'
import About from './Screens/About.js'
import DrawerContainer from './StyleDrawer/DrawerContainer.js'
import StackNavigator_LatestNews from './StackNavigator_LatestNews/StackNavigator_LatestNews.js'
const MyDrawerNavigator = createDrawerNavigator({
  One: {
    screen: LatestNews,
  },
  Two: {
    screen: NewsOutlets,
  },
  Three : {
    screen : Settings
  },
  Four : {
    screen : About
  },
  Five : {
    screen : StackNavigator_LatestNews
  },
},
{
  initialRouteName:  'One', //'AccordionExample'
   contentComponent: DrawerContainer
}
);

export default class MainDrawer extends React.Component {
  render() {
    return <MyDrawerNavigator />;
  }
}
