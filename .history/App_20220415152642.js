import { React, useState} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native'
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {loadFont, FONTS } from "./app/constants/theme";


export default function App() {
  if (!loadFont) {
    return <AppLoading/>;
  }
  return (
    <SafeAreaView>
      <NavigationContainer><Text style = {FONTS.h1}>Hello</Text></NavigationContainer>
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'Poppins_Bold',
  },
});

