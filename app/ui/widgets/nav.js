import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableHighlight, Text, View, Dimensions, ImageBackground, Image,} from 'react-native';
import geo from '../../images/geo.png'
import Icon from 'react-native-vector-icons/MaterialIcons';

// Be sure to Demo these
import { Font } from 'expo';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var highLighted = "#d74ea2"

// This is the strong hold and invasion schema for the Navigation bar.

export default class NavHold extends React.Component {
  constructor(){
    super()
    this.state = {
    }
  }

componentDidMount(){
  console.log(Icon)
  }

queueInvasion(){
  setState({
    height: dimheight,
    scene: this.Invaded(),

  })
}

  render() {
    return(<View style={{position:'absolute', bottom:0, width:width, height:55, backgroundColor:'rgba(0,0,0,0.7)', flexDirection:'row', justifyContent: 'space-between', padding:5, alignItems: 'center' }}>
<View style={{flexDirection:'row'}}>
<TouchableOpacity><Icon name="filter-hdr" color="#fff" size={19} style={{margin:10}} /></TouchableOpacity>
<TouchableOpacity><Icon name="security" color="#fff" size={19} style={{margin:10}} /></TouchableOpacity>
<TouchableOpacity><Icon name="format-paint" color="#fff" size={19} style={{margin:10}} /></TouchableOpacity>
</View>
<View>
<TouchableOpacity><Icon name="color-lens" color="#fff" size={19} style={{margin:10}} /></TouchableOpacity>
</View>
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
