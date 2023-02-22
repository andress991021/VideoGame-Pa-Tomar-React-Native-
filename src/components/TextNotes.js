import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import { useFonts } from 'expo-font';



export default function TextNotes(props) {


    /*---------------------------Fonts----------------------------- */
    const [fontLoaded] = useFonts({

        RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
        RobotoCondensed: require("../assets/fonts/RobotoCondensed-Regular.ttf"),
        RobotoSlab: require("../assets/fonts/RobotoSlab-Regular.ttf")
    })



    /*-------------------------------------------------------------- */


    const { textnotes } = props
    return (
        <Text style={styles.textparragrafcss}>{textnotes}</Text>

    )
}

TextNotes.propTypes = {
    textnotes: PropTypes.string.isRequired//Component Required in string
};

const styles = StyleSheet.create({
    textparragrafcss: {
        fontFamily: 'RobotoRegular',
        fontSize: 12,


        textAlign: 'center',
        color: 'white'
    }

});