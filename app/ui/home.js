import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'


// This is the default page on new Merciyaj instance.

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
                <Navigator
              style={{flex: 1}}
              ref={'NAV'}
              initialRoute={{id: 'home', name: 'home'}}
              renderScene={this.renderScene.bind(this)}
            /> 
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
