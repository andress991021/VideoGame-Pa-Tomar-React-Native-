import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
//Components create for the proyect.
import TextTitle from '../components/Title'
import ButtomGreen from '../components/Buttoms'
import TextParragraf from '../components/Parragraf';
import OptionButtom from '../components/OptionsButtom';

import ImageInstruction from '../components/Images';


export default function RuletteScreen(props) {
    const { navigation } = props;
    const goToPage = (routename) => {
        navigation.navigate(routename)
    }


    return (
        <View style={styles.containercss}>


            <View style={styles.icontitle1}>

                <Text> TItulo </Text>

                <View style={styles.icontitle2}>
                    <OptionButtom titlename="X" linkdirection={() => goToPage("InstruccionOneScreen")} />
                </View>

            </View>



            <View style={styles.tarjetcss}>
                <View style={{ marginTop: 24 }}>
                    <TextTitle texttitle="Pa Tomar" />
                </View>
                <View >
                    <TextParragraf textparragraf="Click The Wheel" />
                </View>
                <View>
                    <ImageInstruction fileimage={require('../assets/imgs/ruleta.png')} />
                </View>

            </View>
        </View>
    )




}


const styles = StyleSheet.create({
    containercss: {
        flexDirection: 'row',

        flex: 1,
        backgroundColor: '#2E2E3E',
        paddingHorizontal: 16,
        alignItems: 'stretch',
        justifyContent: 'space-around',

    },
    icontitle1: {

        backgroundColor: 'yellow',

    },
    icontitle2: {


        backgroundColor: 'red',

    },

    tarjetcss: {

        flexWrap: 'nowrap',
        backgroundColor: '#222525',
        paddingHorizontal: 39,
        marginBottom: 26,
        borderRadius: 8,


    },
});