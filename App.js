import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header, Left, Right, Body, Icon, Button } from 'native-base'


export default function App() {
  return (
    <View style={styles.container}>

      <Image source={require('./assets/refilledlogo.png')} style={{
        height: 140, width: 220, resizeMode: 'contain'
      }} />
      {/*<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 50 }}>REFILLED</Text>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, paddingBottom: 25 }}>Scan your wallet to refill</Text>*/}

      <Image source={require('./assets/refilledqrcode.png')} style={{
        height: 170, width: 170, marginTop: 25
      }} />

      {/*<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, paddingTop: 25 }}>@refilledshop</Text>*/}

      
        <Button
        full
        rounded
        iconLeft
        primary
        title="Press Me"
        style={{ borderRadius: 8, marginTop: 60, backgroundColor: '#32baff', borderColor: '#F5F8FA', padding: 20, margin: 98 }}
      //onPress={() =>{this.onSignupWithemail()}}
      >
              <Text style={{ flex: 2, fontSize: 19, color: 'white', fontWeight: '600', textAlign: 'center' }}> Get a refill </Text>
      </Button>
      

    </View>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#67d1ff',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
