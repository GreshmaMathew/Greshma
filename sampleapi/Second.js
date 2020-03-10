import  React from 'react';
import { View, Text ,Button, StyleSheet,ActivityIndicator,FlatList} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default  class Second extends React.Component{
constructor(props){
    super(props);
    this.state = {
        load:true,
        data:null,
    }
}
componentDidMount(){
return fetch('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3')
.then ( (response) => response.json() )
.then((responseJson) => {
    this.setState({
        load: false,
        data: responseJson.results,
    })
})
.catch((error) => {
    console.log(error)
});
    }
     
    render(){
        console.log(this.state.data)
        if(this.state.load){
            return(
                <View style={styles.ai}>
                    <ActivityIndicator size="large" color="#000000"/>
                </View>
            )

        } else{
return(
    <View style={styles.container}>
        <Text style={styles.news}>Ingredients</Text>
    <FlatList
    data={this.state.data}
    renderItem={({item}) => 
    <View style={styles.Flatlistcontainer}>
    <Text style={{fontSize:20}}>{item.ingredients}</Text>
    </View>
    }
    keyExtractor={(item,index) => index}
    />
      </View>

);
    }
}
}
const styles=StyleSheet.create({
    Flatlistcontainer: {
        flex: 5,
        backgroundColor: "#D3D3D3",
        borderBottomWidth:1,
        borderColor:'black',
        paddingLeft:15,
        paddingTop:15,
        paddingBottom:15,
        fontWeight:'bold',
       },
 container:
 {
    flex:1,
    alignSelf:"stretch",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#D3D3D3"
 } ,
 ai:
 {
    flex: 1,
    justifyContent: 'center',
    padding:30,
    paddingTop:30,
 },
 news:
 {
    fontWeight:"bold",
    fontSize:20,
    color:"blue",
    justifyContent:"center",
  
 } ,
 
});




