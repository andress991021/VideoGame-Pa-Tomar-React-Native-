import { Text, View, StyleSheet } from 'react-native'
import React from 'react'

//for the rulette

import Roulette from 'react-native-roulette';


//Components create for the proyect.
import TextTitle from '../components/Title'
import TextParragraf from '../components/Text/Parragraf';
import OptionButtom from '../components/Buttoms/OptionsButtom';

//Styles

import RuletteStyles from '../assets/Styles/RuletteStyles.js';







export default function RuletteScreen(props) {
    const { navigation } = props;
    const goToPage = (routename) => {
        navigation.navigate(routename)
    }

    return (
        <View style={RuletteStyles.containercss}>
            <View style={RuletteStyles.header}>


                <View style={{ alignContent: 'flex-start', }}>
                    <OptionButtom titlename="<" linkdirection={() => goToPage("InstruccionOneScreen")} />
                </View>

                <View style={{ textaling: 'right', }}>
                    <OptionButtom titlename="X" linkdirection={() => goToPage("InstruccionOneScreen")} />
                </View>

            </View>

            <View style={RuletteStyles.margin_sm}>



                <Text style={RuletteStyles.logo}> LOGO</Text>


            </View>



            <View /* style={styles.tarjetcss} */>
                <View style={{ marginTop: 24 }}>
                    <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold', textAlign: 'center', }}>Spin</Text>
                </View>
                <View >
                    <TextParragraf textparragraf="Click The Wheel" />
                </View>


                <View>

                </View>

            </View>

        </View >
    )




}

