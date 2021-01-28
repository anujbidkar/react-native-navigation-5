// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen 2</Text>
      <Button 
      title="Click Here"
      onPress={
        ()=> navigation.navigate("Details")
      }
      />
    </View>
  );
}
function Detailscreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen Screen 2</Text>
     
      <Button 
      title="Push Here"
      onPress={
        ()=> navigation.push("Home")
      }
      />
      <Button 
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
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={  {
        headerShown:false,
        headerStyle:{
          backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Detailscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;