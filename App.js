// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React, {Component} from 'react';
// import {Button, Text, View} from "react-native";
// //const App = () => {
//   class App extends Component {
//     constructor(props){
//     super(props)
    
//     this.state = {
//       myTitle : "goodbay"
//     }
//   }
//     Press_me(){
//       console.log('button');
//       this.setState({myTitle: "Hello!"})
//     }

    
    
//     render(){
//     return (
//     <View style={styles.container}>

//     <Text style = {styles.welcome}>
//       Hello!
//       </Text>
//       <View style = {styles.button}>
//         <Button onPress = {this.Press_me} title = "HELLO!" color = '#FFFFFF' backgroundColor = '#0B1354'/>
//       </View>
//     </View>
//  );}
   

//   }

//   let  styles = {
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#FFCCCC'
//     },
//       welcome : {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10 
//       },
//       button: {

//       }
//     }
// export default App;

import React from 'react';
import {Text, View} from 'react-native';
import {Header} from './Header';
import {heading} from './Typography';

const WelcomeScreen = () =>
  <View>
    <Header title="Welcome to React Native"/>
    <Text style={heading}>Step One</Text>
    <Text>
      Edit App.js to change this screen and turn it
      into your app.
    </Text>
    <Text style={heading}>See Your Changes</Text>
    <Text>
      Press Cmd + R inside the simulator to reload
      your app’s code.
    </Text>
    <Text style={heading}>Debug</Text>
    <Text>
      Press Cmd + M or Shake your device to open the
      React Native Debug Menu.
    </Text>
    <Text style={heading}>Learn</Text>
    <Text>
      Read the docs to discover what to do next:
    </Text>
   </View>
  
 
