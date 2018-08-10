import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// The Course + Graphics
// The New and the free
// About

export default class Exclusive extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
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
