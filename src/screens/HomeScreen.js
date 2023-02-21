import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
//Components create for the proyect.
import TextTitle from '../components/Title'
import ButtomGreen from '../components/Buttoms'
import TextParragraf from '../components/Parragraf';


export default function HomeScreen(props) {

  const { navigation } = props;
  const goToPage = (routename) => {
    navigation.navigate(routename)
  }

  return (
    <View style={styles.containercss}>
      <View style={styles.tarjetcss}>
        <View style={{ marginTop: 24 }}>
          <TextTitle texttitle="Disclaimer" />

        </View>
        <View style={{ marginTop: 13, marginHorizontal: 20 }}>
          <TextParragraf textparragraf="Please party responsibly. Never do something to put yourself or anyone in danger. Have fun!" />
        </View>
        <View style={{ marginTop: 40, marginBottom: 20 }}>
          <ButtomGreen titlename="Next" linkdirection={() => goToPage("InstruccionOneScreen")} />
        </View>
      </View>
    </View>
  )
}


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