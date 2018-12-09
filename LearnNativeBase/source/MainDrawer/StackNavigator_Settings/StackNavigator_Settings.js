import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import One from './Screens/One'
import Two from './Screens/Two'

const StackNavigator_Settings = createStackNavigator(
{
  One: {  screen: One },
  Two: { screen: Two },
},
{
  initialRouteName: 'One'
}

);



export default StackNavigator_Settings;
