import { React, useState, Component } from 'react';
import * as Font from 'expo-font';
class FontLoading extends Component {
    constructor() {
        this.state = {
      fontsLoaded: false,
        },
    check = false;
    };
   
    async loadFonts() {
      await Font.loadAsync({
        // Load a font `Montserrat` from a static resource
        'Poppins-Bold': require('../../assets/fonts/Poppins-Italic.ttf'),
      });
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this.loadFonts();
    }
  
    render() {check = this.state.fontsLoaded
    console.log(check)}
  }
  export default FontLoading;