import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

// importing our FetchLocation file form the components folder
import FetchLocation from './components/FetchLocation';
import  UsersMap from './components/UsersMap';

export default class  App  extends Component {
  state = {
    userLocation: null,
    usersPlaces: [],
  }

  getUserLocationHandler = ()=>{
    navigator.geolocation.getCurrentPosition(position =>{
      console.log(position.coords.latitude +" hekko "+ position.coords.longitude);
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0421,
      }
    });
    fetch('https://emexmaps-25316.firebaseio.com/place.json',{
      method: 'POST',
      body: JSON.stringify({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
  })
    })
    .then(res=> console.log(res))
    .catch(err => console.log(err));
    }, err => console.log(err));
  };

   getuserPlacesHandler=()=>{
    fetch('https://emexmaps-253216.firebaseio.com/place.json')
    .then(res=> res.json())
    .then(parsedRes=>{
      const placesArray =[];
      for (const key in parsedRes){
        placesArray.push({
          latitude: parsedRes[key].latitude,
          longitude:parsedRes[key].longitude,
          id: key
        });
      }
      
      this.setState({
        usersPlaces: placesArray
      });
      //console.log(usersPlaces)
    })
    .catch(err => console.log(err));
   } 

   render() 
   {
     return (
    <View style={styles.container}>
      <View style={styles.getButton}>
      <Button title="get user palces" onPress=
      {this.getuserPlacesHandler}/>

      </View>
      <FetchLocation onGetLocation={this.getUserLocationHandler}/>
      <UsersMap userLocation={this.state.userLocation} usersPlaces={this.state.usersPlaces}/>
    <Text> hello</Text>
      </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  getButton:{
    margin: 20,
  }
});

AppRegistry.registerComponent('App', () => App); 