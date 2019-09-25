import *as React from 'react';
import { Button, StyleSheet, View, ImageBackground} from 'react-native';
import Background from '../assets/splash.png';
import Lungs from '../assets/Group141.png'

//export default class FrontPageIcons extends React.Component{
    
    const FrontPageIcons =props=>{
        return (

            <ImageBackground source={Background} style={{width: '100%', height: '100%'}}>
    <View style={{width: '100%', height: '100%'}}>  
    
    <View style={{margin:20}}>
    
        <Button title='Hospital And clinics'/>
    </View>        
    <View style={{margin:20}}>
    
        <Button title='Drug Stores'/>
    </View>
    <View style={{margin:20}}>
   
        <Button title='laboratory'/>
    </View>
    <View style={{margin:20}}>
    
        <Button title='Imaging Center'/>
    </View>
    </View>
  </ImageBackground>
            
    )
}

const style= StyleSheet.create({

    forntpage:{
        
    }


})

export default  FrontPageIcons;