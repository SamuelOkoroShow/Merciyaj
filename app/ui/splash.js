// This is just to display the logo in scece
// It doesnt make sense to have this as it's own view unless you're planning some big things with the index.js file.
// I want to mimic what Rstar/ Naughty dog splash screens work like 
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import beer from '../images/MforMature.png'
import ford from '../images/times.jpg'
import logo from '../images/merciyah.png'


// This is the default page on new Merciyaj instance.

export default class Splash extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      spotlight : beer
    }
  }

  componentDidMount(){
    this.splash();

  }


	splash(){
  // To get our timer working like a bagel shop, we'll need to get the amount of time it take for a logical fade in.
  setTimeout(() => {this.setState({
    spotlight: ford
  })}, 4000)

    setTimeout(() => {this.setState({
    spotlight: logo
  })}, 9000)

     setTimeout(() => {this.props.navigator.push({id:'home', name:'home'})}, 12000)

}


  render() {
    return (
      <View style={styles.container}>
        <Image source = {this.state.spotlight} resizeMode = "contain" style = {{width:200, height:200}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
