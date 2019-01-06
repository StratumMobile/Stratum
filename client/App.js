import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckSwiper from './components/deckswiper'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <DeckSwiper />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
