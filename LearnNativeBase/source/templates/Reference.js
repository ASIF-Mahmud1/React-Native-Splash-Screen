import React, { Component } from 'react';
import { Container, Header, Content, Button,Text } from 'native-base';
export default class RefExample extends Component {
  buttonClicked=()=>{
    alert('Button is Clicked!')
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button onPress={()=>{this.buttonClicked()}} >
           <Text>  Click Me</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
