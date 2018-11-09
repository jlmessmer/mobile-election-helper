import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import ElectionCountdown from './ElectionCountdown'
import ElectionOverview from './ElectionOverview'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default class WelcomeView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name='ios-home' size={25} color='#ccc' />
        <ElectionCountdown />
        <ElectionOverview />
        <Button title='View Election Details' color="#000099" />
      </View>
    )
  }
}