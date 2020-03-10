import  React from 'react';
import { View, Text ,Button, StyleSheet,ActivityIndicator,FlatList,Image} from 'react-native';
//import {StackNavigator} from 'react-navigation'
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default  class First extends React.Component{
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
        const { navigate } = this.props.navigation;
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
        <Text style={styles.news}>Easy italian food recipes</Text>
     <View style={{flex:1,backgroundColor:'yellow',flexDirection:'row'}}>  
        <FlatList
        data={this.state.data}
        renderItem={({item}) => 
        <View style={styles.Flatlistcontainer}>
            <View style={{flex:2,alignSelf:'center',flexDirection:'row'}}>
            <Text style={{fontSize:20}}>{item.title}</Text>
            </View>
            <View style={{flex:2,paddingRight:20}}>
            <Image style={{ width: 70, height: 70, alignSelf: 'center' }} resizeMode='contain' source={{ uri: item.thumbnail }}></Image>
            </View>
      </View>
        }
        keyExtractor={(item,index) => index}
        />
     </View> 
     <View style={{backgroundColor:'red'}}>
      <Button title="GO TO THE INGREDIENTS LIST" onPress={ () => navigate('SECOND')}/>
     </View>
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
    backgroundColor:'#D3D3D3'
 } ,
 ai:
 {
    flex: 5,
    justifyContent: 'center',
    padding:30,
    paddingTop:30
 },
 news:
 {
    fontWeight:"bold",
    fontSize:20,
    color:"blue",
    justifyContent:"center",
 }
    
 
});




