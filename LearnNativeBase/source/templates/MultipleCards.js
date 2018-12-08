import React from 'react';
import {Container,Content, Text} from 'native-base';
import CardShowcaseExample from './CardShowCase'
import HeaderStack from './HeaderStack.js'
const componentName= 'MultipleCards'
class MultipleCards extends React.Component{

  render()
  {
    return(
      <Container>
        <HeaderStack  openDrawer={ () => {alert('Open Drawer should be Triggerd') /*this.props.navigation.openDrawer()*/}} componentName= {componentName}  />
        <Content>
          <Text style={{textAlign: 'center'}}>MultipleCards </Text>
          <CardShowcaseExample/>
          <Text style={{textAlign: 'center'}}>MultipleCards </Text>
          <CardShowcaseExample/>
          <Text style={{textAlign: 'center'}}>MultipleCards </Text>
          <CardShowcaseExample/>
          <Text style={{textAlign: 'center'}}>MultipleCards </Text>
          <CardShowcaseExample/>
          <Text style={{textAlign: 'center'}}>MultipleCards </Text>
          <CardShowcaseExample/>

        </Content>
      </Container>
    )
  }
}

export default MultipleCards
