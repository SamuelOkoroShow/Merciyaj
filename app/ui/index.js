import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// This is were all the mathematics and design sheeets get referenced.
// Dont get confused


// Merciyaj app is made of 3 powerful nuggets
// i. membership and technology recomendations(firebase, fabric io, Dataflow), read ons ii. Exclusive content and my currenttlies iii. Design Bookmarks and opensource

// Natigator Componenet
import {Navigator} from 'react-native-deprecated-custom-components'
import Bookmarks from './bookmarked'
import Membership from './membership'
import Exclusive from './exclusive'
import Home from './home'
import * as firebase from 'firebase';
import fireConfig from '../../auth'

// Initialize Firebase
const firebaseConfig = {
  apiKey: fireConfig.apiKey,
  authDomain: fireConfig.authDomain,
  databaseURL: fireConfig.databaseURL,
  storageBucket: fireConfig.storageBucket,
};

//sample data
var anint = 300
var array = [1,2,2,3]
var string = "That Brittany is on my case again"


const firebaseApp = firebase.initializeApp(firebaseConfig);

const routes = {
  bookmarks: Bookmarks,
  membership: Membership,
  exclusive: Exclusive,
  home: Home
};

// Init Database 
var dataRef = firebaseApp.database().ref('dataTypes/');

export default class index extends React.Component {
  constructor(props){
    super(props)

    console.log(firebaseApp);
  }
  // routing to our views dynamicly
  renderScene({id}, navigator){
    const Scene = routes[id]
    return <Scene {...this.props} hideMenu={() => this.hideMenu()} pushToCache = {this.pushToCash} navigator={navigator}/>
  }

  writeData(str, int, arr) {
  dataRef.set({
    string:string,
   array : array,
   numb: anint
  });
}

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress = {() => {this.writeData()}} style={{padding:5,width:70, height:70, borderRadius:10, backgroundColor:'#A58792', alignItems:'center', justifyContent:'center'}}>
      <Text style={{color:'#fff'}}>Write</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#fff',
  },
});
