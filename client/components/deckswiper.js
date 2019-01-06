import React from 'react';
import Swiper from 'react-native-deck-swiper'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

export default class DeckSwiper extends React.Component {
  render () {
    console.log('HEIGHT IS ====', height, 'WIDTH IS ======', width)
    return (
    <View style={styles.container}>
        <Swiper
            cards={cards}
            renderCard={(card) => {
                return (
                    <View style={styles.card}>
                        <View style={styles.testBox}></View>
                        <Text style={styles.text}>{card.title}</Text>
                        <Image style={styles.image} source={{url: card.image}}/>
                    </View>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'#0e0e0e'}
            disableBottomSwipe={true}
            disableTopSwipe={true}
            stackSize= {3}>
        </Swiper>
    </View>
    )
  }
}
const { height, width } = Dimensions.get('window')

const cards = [
  {
    title: 'DO',
    id: 1,
    image: 'http://lorempixel.com/300/300/people'
  },
  {
    title: 'MORE',
    id: 2,
    image: 'http://lorempixel.com/300/300/people'
  },
  {
    title: 'OF',
    id: 3,
    image: 'http://lorempixel.com/300/300/people'
  },
  {
    title: 'WHAT',
    id: 4,
    image: 'http://lorempixel.com/300/300/people'
  },
  {
    title: 'MAKES',
    id: 5,
    image: 'http://lorempixel.com/300/300/people'
  },
  {
    title: 'YOU',
    id: 6,
    image: 'http://lorempixel.com/300/300/people'
  },
  {
    title: 'HAPPY',
    id: 7,
    image: 'http://lorempixel.com/300/300/people'
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: 'stretch',
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  image: {
    flex:2,
    width: 100,
    height: 100,
  },
  testBox: {
    flex: 3,
    borderColor: 'red',
    borderWidth: 2,
    backgroundColor: 'red',
  }
});