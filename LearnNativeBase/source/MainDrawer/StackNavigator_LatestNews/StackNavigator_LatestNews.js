import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import One from './Screens/One'
import Two from './Screens/Two'

class StackNavigator_LatestNews extends React.Component{
  constructor(props)
  {
    super(props)
  }

  render()
  {
    return(
     <RootStack />
    )
  }
}

// It Contains the List of pages that I can explore
 // return <RootStack />;


const RootStack = createStackNavigator(
  {

  One: {  screen: One },
  Two: { screen: Two },
},
{
  initialRouteName: 'One'
}

);



export default StackNavigator_LatestNews;
