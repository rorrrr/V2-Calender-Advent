import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Advent Calender'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <TouchableHighlight onPress={() => navigate('Task')}> 
      <Image
      source={{uri: 'http://2.bp.blogspot.com/-2SNriqmxd9E/VlW1VCq_h2I/AAAAAAAAAlo/SAGQp9_J-Dw/s1600/1.png'}}
      style={{height: 250, width: 250}}
      />
      </TouchableHighlight>
      </View>
      )
  }

 
}

class TaskScreen extends React.Component {
  static navigationOptions = {
    title: 'Task'
  };

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text> Hi </Text>
      </View>
      )
  }
}

export default StackNavigator({
  Home: {
      screen: HomeScreen,
  },
  Task: {
      screen: TaskScreen,
  }
});