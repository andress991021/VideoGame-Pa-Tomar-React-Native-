import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useCallback } from 'react';


export default function TextParragraf(props) {


  /*---------------------------Fonts----------------------------- */
  const [fontLoaded] = useFonts({

    RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
    RobotoCondensed: require("../assets/fonts/RobotoCondensed-Regular.ttf"),
    RobotoSlab: require("../assets/fonts/RobotoSlab-Regular.ttf")
  })

  useEffect(() => {

    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, [])

  const onLayout = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded])

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
    fontFamily: 'RobotoCondensed',
    fontSize: 12,


    textAlign: 'center',
    color: 'white'
  }

});