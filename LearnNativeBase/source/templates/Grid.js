import React from 'react';
import {View, Linking, Image ,Dimensions, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Button, } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

class GridExample extends React.Component{

render()
{
  return(
    <Container>
      <Content>
        <Row>
           <Col>
            <Text>1</Text>
          </Col>
          <Col>
           <Text>2</Text>
         </Col>
         <Col>
          <Text>3</Text>
        </Col>
       </Row>
       <Row>
          <Col>
           <Text>4</Text>
         </Col>
         <Col>
          <Text>5</Text>
        </Col>
        <Col>
         <Text>6</Text>
       </Col>
      </Row>
      <Row>
         <Col>
          <Text>7</Text>
        </Col>
        <Col>
         <Text>8</Text>
       </Col>
       <Col>
        <Text>9</Text>
      </Col>
     </Row>
      </Content>
    </Container>
  )
}
}

export default GridExample;

/*
render()
{
  let winSize = Dimensions.get('window');
  console.log("width: ", winSize.width)
 console.log(winSize);
  return(
    <Container>
      <Content>
        <TouchableOpacity  onPress={() => Linking.openURL('https://www.thedailystar.net/')}>
          <Image source={require('../MainDrawer/StyleDrawer/Logos/DailyStar.jpg')} style={{height: 150, width: 200, flex:1}}/>
          <Text>Jata tou</Text>
        </TouchableOpacity>
        <Button  onPress={() => Linking.openURL('https://www.thedailystar.net/')} style={{width: 0.9, height:200, }}>
          <View >

            <Image source={require('../MainDrawer/StyleDrawer/Logos/DailyStar.jpg')} style={{height: 150, width: 200, flex:1}}/>
            <Text onPress={() => Linking.openURL('https://www.thedailystar.net/')} style={{textAlign: 'left', paddingLeft:0 , color: 'black'}} >Press Me
            </Text>
          </View>
        </Button>

        <Button onPress={() => Linking.openURL('https://www.thedailystar.net/')}>
          <Text>dsa</Text>
        </Button>
        <View>
          <Image source={require('../MainDrawer/StyleDrawer/Logos/DailyStar.jpg')} style={{height: 150, width: 200, flex:1}}/>
          <Text onPress={() => Linking.openURL('https://www.thedailystar.net/')} style={{textAlign: 'left', paddingLeft:0 , color: 'black'}} >
          <Image source={require('../MainDrawer/StyleDrawer/Logos/DailyStar.jpg')} style={{height: 150, width: 200, flex:1}}/> {"\n"}
            {"\n"} Press Me
          </Text>
        </View>

        <View>
          <Button  onPress={() => Linking.openURL('https://www.thedailystar.net/')} style={{width: 0.9, height:200, }}>
            <View >

              <Image source={require('../MainDrawer/StyleDrawer/Logos/DailyStar.jpg')} style={{height: 150, width: 200, flex:1}}/>
              <Text onPress={() => Linking.openURL('https://www.thedailystar.net/')} style={{textAlign: 'left', paddingLeft:0 , color: 'black'}} >Press Me
              </Text>
            </View>
          </Button>
        </View>

        <View >
        <Image onPress={() => Linking.openURL('https://www.thedailystar.net/')}
        style={{height: 150, width: 200, flex:1}}
       source={require('../MainDrawer/StyleDrawer/Logos/DailyStar.jpg')} />
        <Text onPress={() => Linking.openURL('https://www.thedailystar.net/')}>
        {"sweet, this works"}
        </Text>
         </View>

      </Content>



    </Container>
  )
}
*/
/*

<Container>
  <Content>
    <Button style={{width: 600, height:200}}>
      <View>

        <Image source={require('../MainDrawer/StyleDrawer/Logos/DailyStar.jpg')} style={{height: 150, width: 200, flex:1}}/>
        <Text style={{textAlign: 'left', paddingLeft:0}} >Press Me
        </Text>
      </View>
    </Button>
    <Button style={{width: 600, height:200}}>
      <View>

        <Image source={require('../MainDrawer/StyleDrawer/Logos/DailyStar.jpg')} style={{height: 150, width: 200, flex:1}}/>
        <Text style={{textAlign: 'left', paddingLeft:0}} >Press Me
        </Text>
      </View>
    </Button>
    <Button style={{width: 600, height:200}}>
      <View>

        <Image source={require('../MainDrawer/StyleDrawer/Logos/DailyStar.jpg')} style={{height: 150, width: 200, flex:1}}/>
        <Text style={{textAlign: 'left', paddingLeft:0}} >Press Me
        </Text>
      </View>
    </Button>
  </Content>



</Container>
*/
/*
<Grid>
  <Row>
     <Col><Text>1</Text> </Col>  <Col><Text>1</Text> </Col>  <Col><Text>1</Text> </Col>
  </Row>
  <Row>
    <Col><Text>1</Text> </Col>  <Col><Text>1</Text> </Col>    <Col><Text>1</Text> </Col>
  </Row>
</Grid>
*/

/*
render()
{
  return(
    <Container>
      <Content>
        <Text>Dog</Text>
      <Grid>
        <Row>
          <Button onPress={() => Linking.openURL('https://www.thedailystar.net/')} >
          <Grid>
            <Row>
              <Image source={require('../MainDrawer/StyleDrawer/Logos/DailyStar.jpg')} style={{height: 150, width: 200, flex:1}}/>
            </Row>
              <Row>
                <Text> Go To Daily Star</Text>
              </Row>
          </Grid>
          </Button>
        </Row>
      </Grid>
      </Content>
    </Container>
  )
}
}
*/
