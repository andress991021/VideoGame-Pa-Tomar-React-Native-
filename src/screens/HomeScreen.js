import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
//Components create for the proyect.
import TextTitle from '../components/Title'
import ButtomGreen from '../components/Buttoms'
import TextParragraf from '../components/Parragraf';
import TextNotes from '../components/TextNotes';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useCallback } from 'react';




export default function HomeScreen(props) {

  const { navigation } = props;
  const goToPage = (routename) => {
    navigation.navigate(routename)
  }

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

  return (
    <View style={styles.containercss} onLayout={onLayout}>
      <View style={styles.tarjetcss}>
        <View style={{ marginTop: 24 }} >
          <TextTitle texttitle="Disclaimer" />
          <TextNotes textnotes='holaaaaaaa'></TextNotes>

        </View>
        <View style={{ marginTop: 13, marginHorizontal: 5 }}>
          <TextParragraf textparragraf="Please party responsibly. Never do something to put yourself or anyone in danger. Have fun!" />
        </View>
        <View style={{ marginTop: 40, marginBottom: 20 }}>
          <ButtomGreen titlename="Next" linkdirection={() => goToPage("InstruccionOneScreen")} />
        </View>
      </View>
    </View >
  )
}
//<ButtomGreen titlename="Ok" linkdirection={goToPage}/> 

const styles = StyleSheet.create({
  containercss: {
    flex: 1,
    backgroundColor: '#2E2E3E',
    paddingHorizontal: 16,
    justifyContent: 'center'
  },
  tarjetcss: {

    backgroundColor: '#222525',
    paddingHorizontal: 39,
    borderRadius: 8
  },


});