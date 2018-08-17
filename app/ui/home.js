import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Nav from './widgets/nav'

// This is the default page on new Merciyaj instance.

export default class Home extends React.Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <View style={styles.container}>
        <Nav {...this.props}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
