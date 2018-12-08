import React, { Component } from 'react';
import { Image, Linking ,ImageBackground,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Container>
        {/*<Header />   Enable This Header only when you are testing this component- aka "CardShowcaseExample"  */  }
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>Date of News Goes Here--> April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem  style={{
                borderWidth: 2, borderRadius: 4, paddingTop:10, borderStyle:'solid', borderColor: 'green', marginTop: 0}}>
              <Body>

                {/*
                   <Text onPress={() => Linking.openURL('https://www.thedailystar.net/')} >Press Me!</Text>
                <Button onPress={() => Linking.openURL('https://www.thedailystar.net/')}>
                   <Image  onPress={() => Linking.openURL('https://www.thedailystar.net/')} source={require('../MainDrawer/StyleDrawer/Logos/DailyStar.jpg')} style={{height: 150, width: 200, flex: 1}}/>
                </Button>

                <Image  onPress={() => Linking.openURL('https://www.thedailystar.net/')} source={require('../MainDrawer/StyleDrawer/Logos/DailyStar.jpg')} style={{height: 150, width: 200, flex: 1}}/>

                <Text onPress={() => Linking.openURL('https://www.thedailystar.net/')}>
                   <Image source={require('../MainDrawer/StyleDrawer/Logos/DailyStar.jpg')} style={{height: 150, width: 200, flex: 1}}/>
                </Text>
                */

                }
                <Button  onPress={() => Linking.openURL('https://www.thedailystar.net/')} style={{ marginTop: 0, paddingTop: 0, height:200,
                    borderWidth: 2, borderRadius: 4,paddingTop:0, borderStyle:'solid', borderColor: 'red', }} >
                   <Image   onPress={() => Linking.openURL('https://www.thedailystar.net/')} source={require('../MainDrawer/StyleDrawer/Logos/DailyStar.jpg')} style={{ flex: 1,aspectRatio : 2, resizeMode: 'contain',  borderWidth: 2, borderRadius: 4,paddingTop:0,paddingBottom:0,marginTop:0, borderStyle:'solid', borderColor: 'orange',}}/>

                </Button>


              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text style={{marginBottom: 0, paddingBottom:0}}>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
            <CardItem  style={{ paddingTop:0, }}>
                <Text style={{ color: 'red', fontSize:20, fontStyle: 'italic' }}>Breaking News--> Make It Dynamic.. Depending on Type of News. It will Show </Text>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}
