// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen </Text>
      <Button 
      title="Click Here"
      onPress={
        ()=> navigation.navigate("Detail")
      }
      />
    </View>
  );
}


function Details({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen Screen 2</Text>
    
      <Button 
      title="Mai2n Scree2n"
      onPress={
        ()=> navigation.navigate("Home")
      }
      />
      {/* <Button 
      title="Navigate"
      onPress={
        ()=> navigation.replace("Home")
      }
      />
      <Button 
      title="Navigate"
      onPress={
        ()=> navigation.goBack()
      }
      />
      <Button 
      title="Go to First"
      onPress={
        ()=> navigation.popToTop()
      }
      /> */}
    </View>
  );
}



const HomeStackScreen  =({navigation})=>
(

    <HomeStack.Navigator screenOptions={  {
        headerStyle:{
          backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
      }}>
        <HomeStack.Screen name="Home" component={HomeScreen} 
        options={{
          title:'Anuj',
          headerLeft:() => (
            <Button 
            title="Main Screen"
            onPress={
              ()=> navigation.openDrawer()
            }
            />
            
           
          )
        }}
        ></HomeStack.Screen>      
        </HomeStack.Navigator> 




);
const DetailStackScreen  =({navigation})=>
(

    <DetailStack.Navigator screenOptions={  {
        headerStyle:{
          backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
      }}>
      <DetailStack.Screen name="Detail" component={Details}  />
      </DetailStack.Navigator> 

);
function App() {
  return (
    <NavigationContainer>
     
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailStackScreen} />
      </Drawer.Navigator>
   
     
    </NavigationContainer>
  );
}

export default App;