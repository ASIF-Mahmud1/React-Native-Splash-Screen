/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
console.disableYellowBox = true;

/////////////////////////////////////////////////////////////////

import AnatomyExample from './source/templates/Anatomy.js'
import RefExample from './source/templates/Reference.js'
import NativeDrawer from './source/templates/NativeDrawer/NativeDrawer.js'
import CardShowcaseExample from './source/templates/CardShowCase.js'
import MultipleCards from './source/templates/MultipleCards.js'
import MainDrawer from './source/MainDrawer/Drawer.js'
//////////////////////////////////////////////////////////////////
AppRegistry.registerComponent(appName, () => MultipleCards);
