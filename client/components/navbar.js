import React from "react";
import { View, Text, StyleSheet} from "react-native";

export default class Card extends React.Component {
  render() {
    return (
      <View style={styles.nav}>
        <Text style={styles.text}>Hello this is the NavBar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    marginTop: 20,
    height: 40,
    backgroundColor: '#0e0e0e',
    borderColor: 'green',
    borderWidth: 2,
  },
  text: {
    color: 'white'
  }
});
