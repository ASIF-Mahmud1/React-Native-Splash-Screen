import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import {Icon} from 'native-base'
import IconF from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/Entypo';
export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
         <View>
     {/*  <Text style={{fontWeight: 'bold'}}>Isnt Life Is Beautiful</Text>*/}
       <Image
         source={require('./Logos/mark_tremonti.jpg')}
         //style={[styles.icon, {tintColor: tintColor}]}
         style={{ width: 60, height: 120}}
       />
        </View>
        <View style={{flexDirection:'row', alignItems:'center',}}>

          <IconE name='news'  style={{fontSize: 30, color: 'black',}}/>
          <Text
            onPress={() => {navigation.navigate('One'); navigation.closeDrawer()}}
            style={styles.uglyDrawerItem}>
            Latest News
          </Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center',}}>

          <IconF name='newspaper-o'  style={{fontSize: 30, color: 'black',}}/>
          <Text
            onPress={() => { navigation.navigate('Two');navigation.closeDrawer()}}
            style={styles.uglyDrawerItem}>
          News Outlets
          </Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center',}}>

          <Icon name='settings'  style={{fontSize: 30, color: 'black',}}/>
          <Text
            onPress={() => {navigation.navigate('Three');navigation.closeDrawer()}}
            style={styles.uglyDrawerItem}>
            Settings
          </Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center',}}>

          <Icon name='people'  style={{fontSize: 30, color: 'black',}}/>
          <Text
            onPress={() =>{ navigation.navigate('Four'); navigation.closeDrawer()}}
            style={styles.uglyDrawerItem}>
            About
          </Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 10,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    ///color: '#E73536',
    padding: 15,
    margin: 5,
    //borderRadius: 2,
  //  borderColor: '#E73536',
  //  borderWidth: 1,
    textAlign: 'center'
  }
})
