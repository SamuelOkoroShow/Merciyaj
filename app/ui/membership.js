import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// This is dependent on an authentication code and 
// extends deadlines and project checkpoints
// Helps CEO/CTOs visualize their product as it progresses from ideation to full fledge
// Flaunt some simple yet effective UI UX tacticals
export default class Membership extends React.Component {
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
