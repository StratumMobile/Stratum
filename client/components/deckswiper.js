import React from 'react';
import Swiper from 'react-native-deck-swiper'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Card from '../elements/card';
import Cards from '../testFile/cards.json'

export default class DeckSwiper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: Cards
    }
  }

  reloadCards() {
    console.log('All cards Swiped')
  }

  render () {
    return (
    <View style={styles.container}>
        <Swiper
            cards={this.state.cards}
            renderCard={(card) => {
                return (
                    <Card card={card}/>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {this.reloadCards()}}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
});