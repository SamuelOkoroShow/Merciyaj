// This is just to display the logo in scece
// It doesnt make sense to have this as it's own view unless you're planning some big things with the index.js file.
// I want to mimic what Rstar/ Naughty dog splash screens work like 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import beer from '/images/beer'
import ford from '/images/car'
import logo from '/images/family'


// This is the default page on new Merciyaj instance.

export default class Splash extends React.Component {
	splash(){
  // To get our timer working like a bagel shop, we'll need to get the amount of time it take for a logical fade in.
  setTimeout(X, 2000)
  setTimeout(X, 5000)
  setTimeout(X, 8000)
  // where X is a method to switch out of a current view
}


  render() {
    return (
      <View style={styles.container}>
        
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
