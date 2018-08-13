import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native';
import geo from '../../images/geo.png'
import { Font } from 'expo';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var highLighted = "#d74ea2"

// This is the strong hold and invasion schema for the Navigation bar.

export default class NavHold extends React.Component {
  constructor(){
    super()
    this.state = {
        scene: this.Invaded(),
         fontLoaded: false,
    }
  }

  async componentDidMount(){
    await Font.loadAsync({
      'latoLight': require('../fonts/Lato-Light.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

queueInvasion(){
  setState({
    height: dimheight,
    scene: this.Invaded(),

  })
}

  Invaded(){
    return (
      <View style={styles.container}>
        <Text style={{}}>Hello World!</Text>
         
        <Text style={styles.InvadedTxt}>Hello World!</Text>
        <Text style={styles.InvadedTxt}>Hello World!</Text>
        <Image source ={geo} resizeMode="contain" style={{width:80, height:80, margin:20,}} />
        <Text style={{paddingTop:20, paddingBottom:20, color:'#fff'}}>Current Mailing address. Prefaravly a P O box 349</Text>
        <Text style={{color:"#fff"}}> Call in or Check for updates</Text>
      </View>)
  }

  fortress(){
    return (
      <View style={styles.fortress}>
        <Text style={style.fortressTxt}>Hello World!</Text>
        <Text style={style.fortressTxt}>Hello World!</Text>
        <Text style={style.fortressTxt}>Hello World!</Text>
      </View>)
  }

  render() {
    return(<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  {
    this.state.fontLoaded ? (
      <Text style={{ fontFamily: 'latoLight', fontSize: 50 }}>
        Hello, world!
      </Text>
    ) : null
  }
</View>);
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgba(0,0,0,0.8)',
    height:height,
    width:width,
    padding:20,
 
  },
  fortress:{
    flexDirection:'row',
    padding:10,

    justifyContent:'space-between'
  },
  InvadedTxt:{

      color:'#fff',
      fontSize:50,
      fontWeight:'100',

  },
  fortressTxt:{
      color:'#fff'
  },
  eachElement:{
    fontSize:30,
    fontWeight:'100',
    color:'#ddd',
    paddingTop:50,
    paddingBottom:50

  }
});
