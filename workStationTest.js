<View style = {styles.container} >
      
      <View style = { styles.getLocatio}>
       <FetchLocation  onGetLocation = {this.getUserLocationHandler}/> 
       </View>
       <View style = { styles.forntxover}>
       <FrontPageIcons/>
       </View>
       
       
       <UsersMap userLocation = {this.state.userLocation}
      usersPlaces = {this.state.usersPlaces}/> 

 
       <View style = { styles.getCenters}>
      <Button  title = "get health centers close to you" onPress = {this.getuserPlacesHandler}/>
       </View>
      </View> 



//new line
<ImageBackground style={{
          backgroundColor: '#2b5c94',
          width: '100%', // applied to Image 
          height: '100%' 
        }}>
          <View style={{
            marginTop: 130, 
            justifyContent: 'center',
          alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold',color: 'white'}}>Select The Facility</Text>
          </View> 
            
         
        <View style = {styles.container}>
  
        <TouchableOpacity style={styles.baby}>
          <View style={styles.baby}>
          <Image source={hospital}/>
          <Text style={{color: 'white',}}>Hopitals And Clinice</Text>
          </View>
        </TouchableOpacity>
  
          <TouchableOpacity>
            <View style={styles.baby}> 
              <Image source={pill}/>
              <Text style={{color: 'white'}}>Drug Stores</Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity>
            <View style={styles.baby}>
              <Image source={group}/> 
              <Text style={{color: 'white',}}>Laboratories</Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity>
            <View style={styles.baby}>
              <Image source={hospital}/>
              <Text style={{color: 'white',}}>Imaging Centers</Text>
            </View>
          </TouchableOpacity>
  
        </View>
        
        </ImageBackground>