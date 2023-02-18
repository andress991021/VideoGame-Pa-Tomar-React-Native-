import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';

export default function TextParragraf(props) {
    const {textparragraf}=props
  return (
      <Text style={styles.textparragrafcss}>{textparragraf}</Text>
    
  )
}

TextParragraf.propTypes={
  textparragraf: PropTypes.string.isRequired//Component Required in string
};

const styles = StyleSheet.create({
  textparragrafcss:{
      fontSize:19.24,
      fontWeight:'500',
      lineHeight:22.55,
      textAlign:'center',
      color:'white'
  }

});