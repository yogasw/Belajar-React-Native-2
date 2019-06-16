import React from 'react';
import {StyleSheet, StatusBar,Platform, Text, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.ini_button}>Ini Button</Text>

            <View style={{flex: 1, backgroundColor: 'powderblue'}} />

            <View style={{flex: 2, backgroundColor: 'skyblue'}} />

            <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    ini_button: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:'center'
    }
});
