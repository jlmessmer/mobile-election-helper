import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { black } from 'ansi-colors';

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    fontSize: 30,
    color: 'black'
  }
})

export default class ElectionCountdown extends React.Component {
  constructor(props) {
    super(props)
    this.getTimeUntilElection = this.getTimeUntilElection.bind(this)
    this.state = {
      timeLeft: -1
    }
  }

  componentDidMount(){
    this.getTimeUntilElection()
  }

  getTimeUntilElection(){
    fetch('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyDbqONnLRNSZwf0mfXCW6oFzJJ3J_Q3qsc')
    .then(resp => resp.json())
    .then(info => {
      let dayInMs = 1000*60*60*24;
      let today = new Date()
      let electionDay = Date.parse(info.elections[0].electionDay)
      // console.log((electionDay - today) / dayInMs)
      this.setState({
        timeLeft: Math.ceil((electionDay - today) / dayInMs)
      })
    })
  }

  render(){
    return (<Text style={styles.text}>The next election will happen in {this.state.timeLeft} days</Text>)
  }

}