import React from 'react';
import {Container, Text, Button, Content} from 'native-base';
import Header from '../HeaderComponent/Header.js'
const  componentName= "Settings"
class Settings extends  React.Component {
  render()
  {
    return(
      <Container>
        <Header  openDrawer={() => this.props.navigation.openDrawer()} componentName= {componentName} />
        <Content>
          <Text>Screen Three</Text>
        </Content>
      </Container>
    )
  }
}

export default Settings
