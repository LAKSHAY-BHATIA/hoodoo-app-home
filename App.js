import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import Constants from 'expo-constants';
import HomePage from './Screens/HomePage';
import LoginPage from './Screens/LoginPage';
import {NavigationContainer} from '@react-navigation/native'
import {Entypo,Ionicons} from '@expo/vector-icons'; 
//import {BottomTabBar} from './bottomTab/BottomTabBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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

class App1 extends React.Component {
  render()
  {
return(
 
  <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
             return <Image
            source = {require('./assetsforapp/md-home.png')}
            style={{height: 26, width: 26}}
            />
            } else if (route.name === 'Profile') {
            return <Image
            source = {require('./assetsforapp/account-circle-outline.png')}
            style={{height: 26, width: 26}}
            />
            }
            else if (route.name === 'Message') {
            return <Image
            source = {require('./assetsforapp/message-processing-outline.png')}
            style={{height: 26, width: 26}}
            />
            }
      
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
    <Tab.Screen name="Home" component={HomePage}/>
     <Tab.Screen name="Message" component={MessageScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
  </Tab.Navigator>

)
}
}
const App = ()=>{
  return(
    <NavigationContainer>
<Stack.Navigator headerMode ="none">
 <Stack.Screen name = "Login" component={LoginPage}/>
 <Stack.Screen name = "App1" component ={App1}/>
 </Stack.Navigator>

    </NavigationContainer>
  )
}


export default App;

const Styles = StyleSheet.create({
 
})