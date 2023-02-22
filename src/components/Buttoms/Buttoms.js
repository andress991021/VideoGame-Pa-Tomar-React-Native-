import { Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { useFonts } from 'expo-font';


export default function ButtomGreen(props) {




  /*---------------------------Fonts----------------------------- */

  const [fontLoaded] = useFonts({

    RobotoRegular: require("../../assets/fonts/Roboto-Regular.ttf"),
    RobotoCondensed: require("../../assets/fonts/RobotoCondensed-Regular.ttf"),
    RobotoSlab: require("../../assets/fonts/RobotoSlab-Regular.ttf")
  })

  /*-------------------------------------------------------------- */


  const { titlename, linkdirection } = props

  return (
    <TouchableOpacity
      style={{
        ...styles.buttoncss,
        backgroundColor: '#00D763'
      }}
      onPress={linkdirection}>

      <Text style={{
        ...styles.buttontextcss,
        color: 'white'
      }}>
        {titlename}
      </Text>
    </TouchableOpacity>
  )
}


ButtomGreen.propTypes = {
  titlename: PropTypes.string.isRequired//Component Required in string
};


const styles = StyleSheet.create({
  buttoncss: {
    alignSelf: 'center',
    borderRadius: 100,
    paddingVertical: 12,
    width: 237
  },

  buttontextcss: {
    alignSelf: 'center',
    fontFamily: 'RobotoRegular',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19

  }
});
