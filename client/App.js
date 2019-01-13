import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckSwiper from './components/deckswiper'
import NavBar from './components/navbar'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" setBackgroundColor='#0e0e0e'/>
        <NavBar />
        <DeckSwiper />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e0e'
  }
});
