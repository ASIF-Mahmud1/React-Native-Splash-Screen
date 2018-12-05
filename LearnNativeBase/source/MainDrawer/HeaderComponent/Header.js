import React, { Component } from "react";
//import { Container, Header,  } from "native-base";
import { Accordion ,Container,Content, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {Text, View} from 'react-native';
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
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
