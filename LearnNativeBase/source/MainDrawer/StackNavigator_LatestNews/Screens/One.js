import React from 'react';
import {Container, Text, Button, Content} from 'native-base';
import HeaderStack from '../../HeaderComponent/Header'
const  componentName= "One"
class One extends  React.Component {
  /////////////////////////
  /// To Hide The Blank... At the top of screen
  static navigationOptions = {
    header: null
  };
  //////////////////////////
  render()
  {
    return(
      <Container>
        <HeaderStack  openDrawer={() => this.props.navigation.goBack()} componentName= {componentName} arrowName={'md-arrow-round-back'} />
        <Content>
          <Text>Latest News-- Screen One</Text>
          <Button onPress= { ()=> { this.props.navigation.navigate('Two') } }>
            <Text>Go To Screen Two </Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default One
