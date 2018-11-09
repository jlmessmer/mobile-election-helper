import React from 'react';
import { StyleSheet, TabBarIOS, TabBarIOSItem } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import WelcomeView from './WelcomeView';
import SettingsView from './SettingsView';
export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'welcome'
    }
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'welcome'}
          onPress={() => { this.setState({ selectedTab: 'welcome' }) }}
          title="Home"
          icon={<Icon title='home' size={25} />}
          >
          <WelcomeView />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'settings'}
          onPress={() => { this.setState({ selectedTab: 'settings' }) }}

          title="Settings"
        >
          <SettingsView />
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
