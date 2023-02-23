import { Text, View, StyleSheet, Modal } from 'react-native'
import React from 'react'

//Components create for the proyect.
import TextTitle from '../components/Title'
import TextParragraf from '../components/Text/Parragraf';
import OptionButtom from '../components/Buttoms/OptionsButtom';

//Styles

import RuletteStyles from '../assets/Styles/RuletteStyles.js';
import { useState } from "react";





export default function RuletteScreen(props) {
    const { navigation } = props;
    const goToPage = (routename) => {
        navigation.navigate(routename)
    }

    const [view, setView] = useState(false);


    return (
        <View style={RuletteStyles.containercss}>
            <View style={RuletteStyles.header}>


                <View style={{ justifyContent: 'space-between', }}>
                    <OptionButtom titlename="<" linkdirection={() => goToPage("InstruccionOneScreen")} />
                </View>

                <View style={{ justifyContent: 'flex-end', }}>

                    <OptionButtom titlename="+" action={() => {

                        setView(true);

                    }} />

                    <Modal animationType="fade"
                        onDimiss={() => console.log('close')}
                        onShow={() => console.log('show')}
                        transparent
                        visible={true}
                    >

                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'rgba(1,1,1,0.5)',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-end',

                            }}
                        >

                            <View
                                style={{

                                    height: '40%',
                                    width: '30%',
                                    backgroundColor: 'white',
                                    borderRadius: 20,
                                    margin: 15,

                                }}
                            >

                                <OptionButtom titlename="Languaje" />
                                <OptionButtom titlename="How to" />
                                <OptionButtom titlename="Close" action={() => { setView(false); }} />



                            </View>
                        </View>

                    </Modal>
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

