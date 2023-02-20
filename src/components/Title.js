

import { Text, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes, { func } from 'prop-types';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useCallback } from 'react';


export default function TextTitle(props) {

    const [fontLoaded] = useFonts({

        RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
        RobotoCondensed: require("../assets/fonts/RobotoCondensed-Regular.ttf"),
        RobotoSlab: require("../assets/fonts/RobotoSlab-Regular.ttf")
    })



    const { texttitle } = props;
    return (
        <Text style={styles.texttitlecss}>
            {texttitle}
        </Text>
    );
}


TextTitle.propTypes = {
    texttitle: PropTypes.string.isRequired//Component Required in string
};


const styles = StyleSheet.create({
    texttitlecss: {
        fontFamily: 'RobotoSlab',
        fontSize: 35,
        fontWeight: '600',
        lineHeight: 47.58,
        textAlign: 'center',
        color: 'white',
    }

});
