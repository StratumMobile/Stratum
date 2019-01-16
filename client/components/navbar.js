import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

export default class Card extends React.Component {
  render() {
    return (
      <View style={styles.nav}>
        {/* <Text style={styles.text}>Hello this is the NavBar</Text> */}
        {/* <TouchableOpacity onPress={()=>this.middleButton()}> */}
        <Image style={styles.icon} source={require('../assets/images/profile_icon.png')} />
        {/* </TouchableOpacity> */}

        {/* <TouchableOpacity onPress={()=>this.middleButton()}> */}
          <Image style={styles.icon} source={require('../assets/images/header.png')} />
        {/* </TouchableOpacity> */}

        {/* <TouchableOpacity onPress={()=>this.middleButton()}> */}
        <Image style={styles.icon} source={require('../assets/images/score_icon.png')} />
        {/* </TouchableOpacity> */}
      </View>
    );
  }

  middleButton() {
    console.log('You have pressed the middle button!')
  }
}

const styles = StyleSheet.create({
  nav: {
    marginTop: 20,
    marginRight: 5,
    marginLeft: 5,
    height: 40,
    backgroundColor: '#0e0e0e',
    // borderColor: 'green',
    // borderWidth: 2,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  text: {
    color: 'white'
  },
  icon: {
    width: '13%',
    height: '100%',
  }
});
