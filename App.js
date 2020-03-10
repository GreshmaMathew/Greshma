
import * as React from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import First from './sampleapi/First';
import Second from './sampleapi/Second';

function First1({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',alignSelf:'center'}}>
      <Button title="GO TO THE RECIPE LIST" onPress={ () => {navigation.navigate('FIRST')}}/>
    </View>
  );
}
/*
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
  }*/

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="FIRST1" component={First1} options={{
        title:"Welcome to the recipe world",
        headerStyle: {
            backgroundColor: '#D3D3D3',
          },
          headerTintColor: '#0000A0',
          headerTitleStyle:
           {
            fontWeight: 'bold',
            alignSelf:'center',   
        }, 
    }}/>
        <Stack.Screen name="FIRST" component={First} options={{
        title:"My recipe Book",
        headerStyle: {
            backgroundColor: '#D3D3D3',
          },
          headerTintColor: 'blue',
          headerTitleStyle:
           {
            fontWeight: 'bold',
      
        },
        
    }}/>
        <Stack.Screen name="SECOND" component={Second} options={{ 
          title:"Recipe ingredients",
          headerStyle: {
            backgroundColor: '#D3D3D3',
          },
          headerTintColor: 'blue',
          headerTitleStyle:
           {
            fontWeight: 'bold'
        },
      
    }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
