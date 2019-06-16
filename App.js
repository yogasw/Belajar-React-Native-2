






import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ini Button</Text>
      <View style={{width:50, height:50, backgroundColor:'powderblue'}} />
      <View style={{width:100, height:100, backgroundColor:'skyblue'}}/>
      <View style={{width:150, height:150, backgroundColor:'black'}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
