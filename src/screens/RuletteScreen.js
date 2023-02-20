import { View, StyleSheet } from 'react-native'
import React from 'react'
//Components create for the proyect.
import TextTitle from '../components/Title'
import ButtomGreen from '../components/Buttoms'
import TextParragraf from '../components/Parragraf';


export default function RuletteScreen(props) {
    const { navigation } = props;
    const goToPage = (routename) => {
        navigation.navigate(routename)
    }


    return (
        <View style={styles.containercss}>

            <View>
                <TextParragraf textparragraf="Esta es pantalla de ruleta"></TextParragraf>
                <ButtomGreen> </ButtomGreen>
            </View>

        </View>
    )

}


const styles = StyleSheet.create({
    containercss: {
        flex: 1,
        backgroundColor: '#2E2E3E',
        paddingHorizontal: 16,

    },
    optionbutton: {
        backgroundColor: '#222525',
        paddingHorizontal: 39,
        borderRadius: 8
    },

});