import React from 'react';
import {Container, Text, Button, Content} from 'native-base';
import HeaderStack from '../../HeaderComponent/Header'
const  componentName= "Two"
class Two extends  React.Component {
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
          <Text>Latest News-- Screen Two</Text>
          <Button onPress= { ()=> { this.props.navigation.navigate('One') } }>
            <Text>Go To Screen One</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default Two
