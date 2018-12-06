import React, { Component } from "react";
//import { Container, Header,  } from "native-base";
import {  Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {Text, View} from 'react-native';

export default class AccordionExample extends Component {
  render() {
    return (

        <Header>
          <Left>
            <Button transparent onPress= {()=>{this.props.openDrawer()}}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.componentName}</Title>
          </Body>
        <Right/>
      </Header>

    );
  }
}
