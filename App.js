import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios'
// importing our FetchLocation file form the components folder
import FetchLocation from './components/FetchLocation';
import  UsersMap from './components/UsersMap';

import { Constants, MapView } from 'expo';
import *as Permissions from 'expo-permissions'
import *as Location from 'expo-location'

export default class  App  extends Component {
  state = {
    userLocation: null,
    usersPlaces: [],
  }
   option = {
    "headers": {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ2MTE5ZjQzY2FlOTUyMWEwYWYzMmVkMGM4MjAzNzMyMzVmNGI1MjNmYzcyYTQ2ZTg0MzJlMjI1MjdiYmUzOWZhNWM1NWU1ZDI3NmVmNTI0In0.eyJhdWQiOiIxIiwianRpIjoiZDYxMTlmNDNjYWU5NTIxYTBhZjMyZWQwYzgyMDM3MzIzNWY0YjUyM2ZjNzJhNDZlODQzMmUyMjUyN2JiZTM5ZmE1YzU1ZTVkMjc2ZWY1MjQiLCJpYXQiOjE1Njg5MDc4MDcsIm5iZiI6MTU2ODkwNzgwNywiZXhwIjoxNjAwNTMwMjA3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.a_yightYoYZSZ4NrFkpYkBCBMxWtKTDTmweelMAuQwjuZIyeP70C3pp6aq3jUb__R0syseuV7rrNeYhBegoG-9C3C0bLFQ1NDH-R6d3nNRFeno58LVWq4RxWOqfeaw0lBXIM5XfGSFsfxYtzzt_YPwf6N-uktK1kJIZ907-itK9qTjrGMBJ9_ksaB-Vr3cH8oxj6zbHws4mMlN68ZCduYEO9YEovwv4iLXVgDuZIKz-B3mnau8N2QlvlGtN6jTe5TP_8fbiL9ac_2PxHFqRnqPtjgEERf0KVwh492gkDPQz0YJtI0KCUfFAG7sEI2avPdAAQr3j57juUXjTTifNbUPl48xpUIInj10K7oXMdp-3apGDCKkxgocpNz3p5W7K6nPEVDSWKM7uZhjHpCL8kq2CBSVQhDVodX_srorXe9_aMltJcnpYZVhg0nfT1x9sAIHbgXmLwd2xLjxeZ9NiKiRJiXAY9zOIirR6UtSKHM7UDqSdFW_ESLGalNJkv8rjJOu4I_2NIinTYwkr3sFAJxjVHqnzUR6n-Q5wTWUcsickQUaIpZx7yCaoGRF5t9qTY6iZ4xEnifMbNxKsPLQTDzkQh_pkRURNPXPzZ1iqEUJ2kBi5wTdu9HyObwsDChgcM0n2exltGH1YRbVw6tG-K9zuofEahBRwW8sEvGx0FFkE",
    }
   }
   
   componentDidMount(){
     
   
    this.setState({ 
    userLocation: {
      latitude: 9.1158747,
      longitude: 7.3647308,
      latitudeDelta: 0.0622,
      longitudeDelta: 0.0421,
  }
});}

  getUserLocationHandler = async ()=>{
    //let { status } = await Permissions.askAsync(Permissions.LOCATION);
    this.setState({
      userLocation: {
        latitude: 9.1158747,
        longitude: 7.3647308,
        latitudeDelta: 0.0622,
        longitudeDelta: 0.0421,
    }
  });
    // if (status !== 'granted') {
    //   this.setState({
    //     errorMessage: 'Permission to access location was denied',
    //   });
    //   console.log("no permission");
    // }
    // else{

    //     console.log("working on location");

    //     let location = await Location.getCurrentPositionAsync({enableHighAccuracy:true});

    //    console.log('latitude is ' + location.coords.latitude)
    //    console.log('longitude is ' + location.coords.longitude)
       

    // }
    // console.log('hello world'); 
    // navigator.geolocation.getCurrentPosition(position =>{
    //   console.log(position.coords.latitude +" hekko "+ position.coords.longitude);
     
    // }, err => console.log(err));
  }

   getuserPlacesHandler=()=>{
    axios.get('https://api.reportahealth.org/v1/fetch_nearest_facilities?latitude=9.0800786&longitude=7.51234828&fac_type=1&page=2', this.option )
    .then(res=> {
      var dataArr = res.data.data.data;
      const placesArray =[];
      for (var key = 0; key < dataArr.length; key++){
        placesArray.push({
        latitude: Number(dataArr[key].latitude ),
        longitude: Number(dataArr[key].longitude),
        id: key,
        });
    }
    //console.log(placesArray);
    this.setState({
      usersPlaces: placesArray
    });

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