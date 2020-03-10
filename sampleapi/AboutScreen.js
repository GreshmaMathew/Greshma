// Homescreen.js
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Aboutscreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
      </View>
    )
  }
}
/*
import * as React from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="GO TO DETAILS SCREEN" onPress={ () => navigation.navigate('DETAILS',{name:"Alan",branch:"IT"})}/>
    </View>
  );
}
function DetailsScreen({route,navigation}) {
    const { name } = route.params;
  const { branch } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>NAME: {JSON.stringify(name)}</Text>
      <Text>BRANCH: {JSON.stringify(branch)}</Text>
        <Button title="GO TO BACK TO HOME SCREEN" onPress={ () => {navigation.navigate('HOME')}}/>
      </View>
    );
  }

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HOME" component={HomeScreen} options={{
        title:"My homescreen",
        headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle:
           {
            fontWeight: 'bold'
        },
    }}/>
        <Stack.Screen name="DETAILS" component={DetailsScreen} options={{ title:"Detailscreen",
        headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff" />)
    }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

*/
