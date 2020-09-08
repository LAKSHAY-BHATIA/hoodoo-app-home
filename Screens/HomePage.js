import React from 'react';
import { StyleSheet, View, Text, Image ,ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
const Header = () => {
  return (
    <View style={Styles.header}>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Image
          source={require('../assetsforapp/Group 22.png')}
          style={{
            height: 30,
            width: 30,
            marginTop: 5,
            marginLeft: 5,
          }}
        />
        <Text
          style={{
            fontSize: 26,
            marginLeft: 15,
            color: 'white',
            fontWeight: 'bold',
          }}>
          hoodoo
        </Text>
        <View style={{ flexDirection: 'row', marginLeft: 90, padding: 5 }}>
          <MaterialCommunityIcons
            name="bell"
            size={25}
            color="white"
            style={{
              marginLeft: 30,
            }}
          />
          <FontAwesome
            name="bars"
            size={25}
            color="white"
            style={{
              marginLeft: 24,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const HomePage = () => {
  return (
    <View style={{flex:1}}>
      <Header />
      <View>
        <Image
          style={{ height: 125, width: '100%' }}
          source={require('../assetsforapp/food.jpg')}
        />
        <View
          style={{
            height: 88,
            width: 88,
            borderRadius: 44,
            backgroundColor: 'white',
            position: 'absolute',
            alignSelf: 'center',
            marginTop: 20,
            padding: 20,
            elevation: 0.5,
          }}>
          <Image
            source={require('../assetsforapp/Group 13.png')}
            style={{
              height: 50,
              width: 40,
              alignSelf: 'center',
            }}
          />

          
        </View>
      </View>
      <ScrollView>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: 'white',
            borderColor: 'gray',
            marginTop: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            elevation: 10,
          }}>
          <FontAwesome
            name="user"
            size={30}
            color="gray"
            style={{ alignSelf: 'center', padding: 10 }}
          />
        </View>

        <Text
          style={{
            fontSize: 20,
            alignSelf: 'center',
            marginLeft: 13,
            marginTop: 10,
          }}>
          {' '}
          Lakshay Bhatia{' '}
        </Text>
      </View>

     <View style={{flex:1 , flexDirection: 'row'}}>
     <View style={{width: 160 , height: 100,
     shadowColor: '#000',
      backgroundColor: 'white',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            elevation: 10,
            margin: 10
      }}>
     <Image source={require('../assetsforapp/Group 16.png')}
     style={{
      alignSelf: 'center',
      height: 50 ,
      width: 50,
      marginTop: 10
     }}
     />
      <Text style={{margin: 6 ,alignSelf: 'center',fontSize: 15}}>Cook Info</Text>
     </View>


   <View style={{width: 160 , height: 100,
     shadowColor: '#000',
      backgroundColor: 'white',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            elevation: 10,
            margin: 10
      }}>
     <Image source={require('../assetsforapp/calendar2-check.png')}
     style={{
      alignSelf: 'center',
      height: 50 ,
      width: 50,
      marginTop: 10
     }}
     />
    <Text style={{margin: 6 ,alignSelf: 'center',fontSize: 15}}>Track Leaves</Text>
</View>
</View>




<View style={{flex:1 , flexDirection: 'row'}}>
     <View style={{width: 160 , height: 100,
     shadowColor: '#000',
      backgroundColor: 'white',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            elevation: 10,
            margin: 10
      }}>
     <Image source={require('../assetsforapp/attachmoney_round.png')}
     style={{
      alignSelf: 'center',
      height: 50 ,
      width: 28,
      marginTop: 10
     }}
     />
      <Text style={{margin: 6 ,alignSelf: 'center',fontSize: 15}}>Payments</Text>
     </View>


   <View style={{width: 160 , height: 100,
     shadowColor: '#000',
      backgroundColor: 'white',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            elevation: 10,
            margin: 10
      }}>
     <Image source={require('../assetsforapp/feedback_outline.png')}
     style={{
      alignSelf: 'center',
      height: 50 ,
      width: 50,
      marginTop: 10
     }}
     />
    <Text style={{margin: 6 ,alignSelf: 'center',fontSize: 15}}>Feedback</Text>
</View>



</View>
</ScrollView>

    </View>
  );
};

export default HomePage;

const Styles = StyleSheet.create({
 
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#5A798E',
  },
});
