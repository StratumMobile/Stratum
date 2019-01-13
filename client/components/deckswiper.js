import React from 'react';
import Swiper from 'react-native-deck-swiper'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Card from '../elements/card'

export default class DeckSwiper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: cards
    }
  }

  reloadCards() {
    console.log('All cards Swiped')
  }

  render () {
    console.log(height)
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
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
});

let cards = [
  {
    firstName: "Stacy",
    yays: 0,
    nays: 0,
    id: 1,
    image: require("../assets/images/woman1.jpg")
  },
  {
    firstName: "Jennifer",
    yays: 0,
    nays: 0,
    id: 2,
    image: require("../assets/images/woman2.jpg")
  },
  {
    firstName: "Harriet",
    yays: 0,
    nays: 0,
    id: 3,
    image: require("../assets/images/woman3.jpg")
  },
  {
    firstName: "Lucy",
    yays: 0,
    nays: 0,
    id: 4,
    image: require("../assets/images/woman4.jpeg")
  },
  {
    firstName: "Denise",
    yays: 0,
    nays: 0,
    id: 5,
    image: require("../assets/images/woman5.jpeg")
  },
  {
    firstName: "Kate",
    yays: 0,
    nays: 0,
    id: 6,
    image: require("../assets/images/woman6.jpg")
  },
  {
    firstName: "Olivia",
    yays: 0,
    nays: 0,
    id: 7,
    image: require("../assets/images/woman7.jpg")
  },
  {
    firstName: "Gwenda",
    yays: 0,
    nays: 0,
    id: 1,
    image: require("../assets/images/woman8.jpg")
  },
  {
    firstName: "Belen",
    yays: 0,
    nays: 0,
    id: 2,
    image: require("../assets/images/woman9.jpg")
  },
  {
    firstName: "Yamilet",
    yays: 0,
    nays: 0,
    id: 3,
    image: require("../assets/images/woman10.jpg")
  },
  {
    firstName: "Elivra",
    yays: 0,
    nays: 0,
    id: 4,
    image: require("../assets/images/woman1.jpg")
  },
  {
    firstName: "Anna",
    yays: 0,
    nays: 0,
    id: 5,
    image: require("../assets/images/woman2.jpg")
  },
  {
    firstName: "Ana",
    yays: 0,
    nays: 0,
    id: 6,
    image: require("../assets/images/woman3.jpg")
  },
  {
    firstName: "Matilde",
    yays: 0,
    nays: 0,
    id: 7,
    image: require("../assets/images/woman4.jpeg")
  },
  {
    firstName: "Amelia",
    yays: 0,
    nays: 0,
    id: 1,
    image: require("../assets/images/woman5.jpeg")
  },
  {
    firstName: "Sara",
    yays: 0,
    nays: 0,
    id: 2,
    image: require("../assets/images/woman6.jpg")
  },
  {
    firstName: "Sarah",
    yays: 0,
    nays: 0,
    id: 3,
    image: require("../assets/images/woman7.jpg")
  },
  {
    firstName: "Merideth",
    yays: 0,
    nays: 0,
    id: 4,
    image: require("../assets/images/woman8.jpg")
  },
  {
    firstName: "Mary",
    yays: 0,
    nays: 0,
    id: 5,
    image: require("../assets/images/woman9.jpg")
  },
  {
    firstName: "Jane",
    yays: 0,
    nays: 0,
    id: 6,
    image: require("../assets/images/woman10.jpg")
  },
  {
    firstName: "Susan",
    yays: 0,
    nays: 0,
    id: 7,
    image: require("../assets/images/woman1.jpg")
  },
  {
    firstName: "Beatrix",
    yays: 0,
    nays: 0,
    id: 1,
    image: require("../assets/images/woman2.jpg")
  },
  {
    firstName: "Agatha",
    yays: 0,
    nays: 0,
    id: 2,
    image: require("../assets/images/woman3.jpg")
  },
  {
    firstName: "Georgie",
    yays: 0,
    nays: 0,
    id: 3,
    image: require("../assets/images/woman4.jpeg")
  },
  {
    firstName: "Dominique",
    yays: 0,
    nays: 0,
    id: 4,
    image: require("../assets/images/woman5.jpeg")
  },
  {
    firstName: "Sarafina",
    yays: 0,
    nays: 0,
    id: 5,
    image: require("../assets/images/woman6.jpg")
  },
  {
    firstName: "Anya",
    yays: 0,
    nays: 0,
    id: 6,
    image: require("../assets/images/woman7.jpg")
  },
  {
    firstName: "Eloise",
    yays: 0,
    nays: 0,
    id: 7,
    image: require("../assets/images/woman8.jpg")
  }
]