import React from 'react';
import { Button, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Details')} />
      </View>);
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Details Screen</Text>
        <Button title="Go to Details...again" onPress={() => this.props.navigation.push('Details')} />
        <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} />
        <Button title="Go Back" onPress={() => this.props.navigation.goBack()} />
      </View>
    )
  }
}

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '': '-outline'}`;
        } else if (routeName === 'Details') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}