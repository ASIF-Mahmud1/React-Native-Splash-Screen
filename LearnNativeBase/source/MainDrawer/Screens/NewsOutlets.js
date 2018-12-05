import React from 'react';
import {Container, Text, Button, Content} from 'native-base';
import Header from '../HeaderComponent/Header.js'
const  componentName= "News Outlets"
class NewsOutlets extends  React.Component {
  render()
  {
    return(
      <Container>
        <Header  openDrawer={() => this.props.navigation.openDrawer()} componentName= {componentName} />
        <Content>
          <Text>Screen Two</Text>
        </Content>
      </Container>
    )
  }
}

export default NewsOutlets
