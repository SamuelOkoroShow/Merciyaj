import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import geo from '../../images/geo.png'

// This is the strong hold and invasion schema for the Navigation bar.

export default class NavHold extends React.Component {
  constructor(){
    super()
    this.state = {

    }
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
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Image source ={geo} style={{width:40, height:80}} />
        <Text style={{paddingTop:20, paddingBottom:20}}>Current Mailing address. Prefaravly a P O box 349</Text>
        <Text style={{}}> Call in or Check for updates</Text>
      </View>
  }

  fortress(){
    return (
      <View style={styles.fortress}>
        <Text style={style.fortressTxt}>Hello World!</Text>
        <Text style={style.fortressTxt}>Hello World!</Text>
        <Text style={style.fortressTxt}>Hello World!</Text>
      </View>
  }

  render() {
    return ({this.state.scene});
  }
}

const styles = StyleSheet.create({
  fortress:{
    flexDirection:'row',
    height:90,
    alignItems:'center',
    justifyContent:'space-between'
  },
  fortressTxt:{
    
  },
  eachElement:{
    fontSize:30,
    fontWeight:'100',
    color:'#ddd',
    paddingTop:50,
    paddingBottom:50

  }
});
