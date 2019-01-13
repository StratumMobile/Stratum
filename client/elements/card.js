import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

export default class Card extends React.Component {
  render() {
    let card = this.props.card
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={{ url: card.image }} />
        <Text style={styles.text}>{card.firstName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: 'stretch',
  },
  text: {
    flex: 1,
    textAlign: "left",
    fontSize: 30,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 5
  },
  image: {
    flex: 5,
    borderRadius: 7,
    // borderWidth:1,
    // borderColor: 'green'
  },
  // testBox: {
  //   flex: 1,
  //   borderColor: 'red',
  //   borderWidth: 2,
  //   backgroundColor: 'red',
  //   borderRadius: 10
  // }
});
