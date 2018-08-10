import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

const routes = {
  bookmarks: Bookmarks,
  membership: Membership,
  exclusive: Exclusive,
  home: Home
};

export default class index extends React.Component {
  // routing to our views dynamicly
  renderScene({id}, navigator){
    const Scene = routes[id]
    return <Scene {...this.props} hideMenu={() => this.hideMenu()} pushToCache = {this.pushToCash} navigator={navigator}/>
  }

  render() {
    return (
      <View style={styles.container}>
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
  },
});
