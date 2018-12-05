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

export default class MainDrawer extends React.Component {
  render() {
    return <MyDrawerNavigator />;
  }
}
