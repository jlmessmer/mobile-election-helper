import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Helvetica',
    fontSize: 25,
    color: 'black'
  }
})

export default class ElectionOverview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contests: 0,
      ready: 0
    }
  }

  componentDidMount() {
     var success = (p) => {
      // https://maps.googleapis.com/maps/api/geocode/json?latlng=${p.coords.latitude},${p.coords.longitude}&key=AIzaSyDAcJ8AtlG00kQGV8zRxHJUyGXzdqaNj3A
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${p.coords.latitude},${p.coords.longitude}&key=AIzaSyDAcJ8AtlG00kQGV8zRxHJUyGXzdqaNj3A`)
        .then(rsp => rsp.json())
        .then(loc => {
          let addr = loc.results[0].formatted_address
          let url = `https://www.googleapis.com/civicinfo/v2/voterinfo?address=${addr}&key=AIzaSyDbqONnLRNSZwf0mfXCW6oFzJJ3J_Q3qsc`
          console.log(url)
          fetch(`https://www.googleapis.com/civicinfo/v2/voterinfo?address=${addr}&electionId=2000&key=AIzaSyDbqONnLRNSZwf0mfXCW6oFzJJ3J_Q3qsc`)
            .then(rsp => rsp.json())
            .then(info => {
              this.setState({
                contests: info.contests.length,
                ready: true
              })
            })
        })
    }

    function error(msg) {
      console.error(msg)
    }

    navigator.geolocation.getCurrentPosition(success, error)
  }

  render() {
    if (this.state.ready) {
      return <Text style={styles.text}>There are {this.state.contests} contests for you to vote in this election</Text>
    } else {
      return null
    }
  }
}