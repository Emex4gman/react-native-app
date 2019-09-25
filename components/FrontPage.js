import *as React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity, Platform, Alert } from 'react-native';
import hospital from '../assets/hospital-x-ray.png'
import pill from '../assets/pill.png'
import group from '../assets/Group141.png'
import Imagee from '../assets/hospital-x-ray.png'
//export default class FrontPageIcons extends React.Component{
  import { createAppContainer } from 'react-navigation';
  import { createStackNavigator } from 'react-navigation-stack';
  

  export default class FrontPage extends React.Component{



  render(){
    return (
      <ImageBackground style={{backgroundColor: '#2b5c94',width: '100%',height: '100%' }}>
      <View style={{
        marginTop: 130,
        justifyContent: 'center', 
        alignItems: 'center',
      }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Select The Facility</Text>
      </View>


      <View style={styles.container}>

        <TouchableOpacity style={styles.baby} onPress={()=> this.props.Home}>
          <View style={styles.baby}>
            <Image source={hospital} /> 
            <Text style={{ color: 'white', }}>Hopitals And Clinice</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.baby}>
            <Image source={pill} />
            <Text style={{ color: 'white' }}>Drug Stores</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.baby}>
            <Image source={group} />
            <Text style={{ color: 'white', }}>Laboratories</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.baby}>
            <Image source={hospital} />
            <Text style={{ color: 'white', }}>Imaging Centers</Text>
          </View>
        </TouchableOpacity>

      </View>

    </ImageBackground>
);
  }
   

};


class Home extends React.Component{
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Details Screen</Text>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
  },
  getCenters: {
    position: 'absolute',
    top: 600,

  },
  forntxover: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',


  },
  getLocatio: {
    position: 'absolute',
    top: 150,
  },
  container:

  {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    // backgroundColor: 'blue',
  },
  getButton: {
    margin: 20,
  },
  baby: {
    // backgroundColor: 'black',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 15,
    margin: 8,
    height: 200,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center'
  }
});



