import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../Screens/HomePage'
const Tab = createBottomTabNavigator();

const MessageScreen = () =>{
  return(<View>
  <Text> Message </Text>
  </View>
  )
}

const ProfileScreen = ()=>{
  return(
    <View>
     <Text>Profile Screen</Text>
    </View>
  )
}

class BottomTabBar extends React.Component{
  render()
  {
  return(
     <Tab.Navigator>
        <Tab.Screen name="Home" component = {HomePage}/>
        <Tab.Screen name = "Message" component={MessageScreen}/>
        <Tab.Screen name = "Profile" component={ProfileScreen}/>
     </Tab.Navigator>

  )}
}


export default BottomTabBar;