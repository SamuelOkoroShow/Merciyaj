import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableHighlight, Text, View, Dimensions, ImageBackground, Image,} from 'react-native';
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
      <View style={{justifyContent:'space-around', flex:8}}>
        <TouchableOpacity><Text style={styles.InvadedTxt}>Hello World!</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.InvadedTxt}>Hello World!</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.InvadedTxt}>Hello World!</Text></TouchableOpacity>
        </View>
        <View style={{flex:2}}>
        <Image source ={geo} resizeMode="contain" style={{width:80, height:80, margin:20,}} />
        <Text style={{paddingTop:20, paddingBottom:20, color:'#fff'}}>Current Mailing address. Prefaravly a P O box 349</Text>
        <Text style={{color:"#fff"}}> Call in or Check for updates</Text>
        </View>
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
      this.Invaded()) : null
  }
</View>);
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgba(0,0,0,0.8)',
    height:height-30,
    width:width,
    padding:20,
    marginBottom:20,
  },
  fortress:{
    flexDirection:'row',
    padding:10,

    justifyContent:'space-between'
  },
  InvadedTxt:{

      color:'#fff',
      fontSize:50,
      fontFamily:'latoLight',
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
