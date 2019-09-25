<View style={styles.container} >

    <View style={styles.getLocatio}>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
    </View>
    <View style={styles.forntxover}>
        <FrontPageIcons />
    </View>


    <UsersMap userLocation={this.state.userLocation}
        usersPlaces={this.state.usersPlaces} />


    <View style={styles.getCenters}>
        <Button title="get health centers close to you" onPress={this.getuserPlacesHandler} />
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
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Select The Facility</Text>
        </View>


        <View style={styles.container}>

            <TouchableOpacity style={styles.baby}>
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





import { StyleSheet, View, Alert, Platform, Button } from 'react-native';
     
    export default class MyProject extends React.Component {
     
      constructor(props) {
        
           super(props)
        
          Obj = new Second();
        
         }
      
         CallFunction_1=()=>{
     
          Obj.SecondClassFunction() ;
     
         }
     
         CallFunction_2=()=>{
          
                Obj.SecondClassFunctionWithArgument("Hello Text");
          
        }
     
      render() {
     
        return (
       
          <View style={styles.MainContainer}>
     
            <View style={{margin: 10}}>
     
              <Button title="Call Another Class Function Without Argument" onPress={this.CallFunction_1} />
     
            </View>
     
            <View style={{margin: 10}}>
     
              <Button title="Call Another Class Function With Argument" onPress={this.CallFunction_2} />
     
            </View>
           
          </View>
     
        );
      }
    }
        
    class Second extends Component {
     
      SecondClassFunction=()=>{
     
        Alert.alert("Second Class Function Without Argument Called");
     
      }
     
      SecondClassFunctionWithArgument=(Value)=>{
     
        Alert.alert(Value);
     
      }
     
    }
     
    const styles = StyleSheet.create(
    {
      MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0
      }
     
    });

    class DetailsScreen extends React.Component {
        render() {
          return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Details Screen</Text>
            </View>
          );
        }
      }
      
      
      
      const RootStack = createStackNavigator(
        {
          Home: HomeDone,
          Details: DetailsScreen,
        },
        {
          initialRouteName: 'Home',
        }
      );
      
      const App = createAppContainer(RootStack);
      
      export default class FrontPage extends React.Component {
        render() {
          return <App/>;
        }
      }