import {Image,StyleSheet} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';


export default function ImageInstruction(props) {
    const {fileimage}=props
  return (
    <Image style={styles.Imagecss} source ={fileimage} />
  )
}


const styles = StyleSheet.create({
  Imagecss:{
    width:160,
    height:160,
    alignSelf:'center',
  }
});
