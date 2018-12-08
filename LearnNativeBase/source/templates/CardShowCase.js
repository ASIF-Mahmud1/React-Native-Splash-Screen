import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Container>
        <Header />
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
            <CardItem>
              <Body>
                <Image source={require('../MainDrawer/StyleDrawer/Logos/DailyStar.jpg')} style={{height: 150, width: 200, flex: 1}}/>
                <Text>
                  Few Lines About The News Goes Here...
                </Text>
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
