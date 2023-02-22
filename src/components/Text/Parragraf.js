import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import { useFonts } from 'expo-font';


export default function TextParragraf(props) {


  /*---------------------------Fonts----------------------------- */

  const [fontLoaded] = useFonts({

    RobotoRegular: require("../../assets/fonts/Roboto-Regular.ttf"),
    RobotoCondensed: require("../../assets/fonts/RobotoCondensed-Regular.ttf"),
    RobotoSlab: require("../../assets/fonts/RobotoSlab-Regular.ttf")
  })


  /*-------------------------------------------------------------- */

  const { textparragraf } = props
  return (
    <Text style={styles.textparragrafcss}>{textparragraf}</Text>

  )
}

TextParragraf.propTypes = {
  textparragraf: PropTypes.string.isRequired//Component Required in string
};

const styles = StyleSheet.create({
  textparragrafcss: {
    fontFamily: 'RobotoRegular',
    fontSize: 19.24,
    fontWeight: '500',
    lineHeight: 22.55,
    textAlign: 'center',
    color: 'white'
  }


});