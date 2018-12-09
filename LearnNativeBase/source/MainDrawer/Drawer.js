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
import StackNavigator_NewsOutlets from './StackNavigator_NewsOutlets/StackNavigator_NewsOutlets.js'
import StackNavigator_Settings from './StackNavigator_Settings/StackNavigator_Settings.js'
const MyDrawerNavigator = createDrawerNavigator({
  LatestNews: {
    screen: LatestNews,
  },
  NewsOutlets: {
    screen: NewsOutlets,
  },
  Settings : {
    screen : Settings
  },
  About : {
    screen : About
  },
  StackNavigator_LatestNews : {
    screen : StackNavigator_LatestNews
  },
  StackNavigator_NewsOutlets : {
    screen : StackNavigator_NewsOutlets
  },
  StackNavigator_Settings : {
    screen : StackNavigator_Settings
  },

},
{
   initialRouteName:  'LatestNews', //'AccordionExample'
   contentComponent: DrawerContainer
}
);

export default class MainDrawer extends React.Component {
  render() {
    return <MyDrawerNavigator />;
  }
}
