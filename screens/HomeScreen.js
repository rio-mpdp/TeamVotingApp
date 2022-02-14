import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../All/config';
export default class HomeScreen extends Component {
  teamA = async()=> {
    await db.ref('/').update({
      teamA: 1,
    });
  }
 teamB = async()=> {
    await db.ref('/').update({
      teamB: 2,
    });
  }

  render() {
    return (
      <View style={{backgroundColor:"#08D9D6"}}>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Image
                style={{ width: 300, height: 220, marginLeft: 5 }}
                source={require('../assets/TeamImage.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', fontSize: 25,fontWeight:"bold" }}>Vote Here</Text>
            <TouchableOpacity style={styles.buttons} onPress={this.teamA}>
              <Text style={{ fontSize: 20, color:"white"}}>Team A</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={this.teamB}>
              <Text style={{ fontSize: 20, color:"white"}}>Team B</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 150,
    height: 50,
   //#252A34
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
