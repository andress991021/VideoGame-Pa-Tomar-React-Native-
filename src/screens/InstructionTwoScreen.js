import { View, Text, FlatList, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
//Components create for the proyect.
import TextTitle from '../components/Title'
import ButtomGreen from '../components/Buttoms/Buttoms'
import TextParragraf from '../components/Text/Parragraf';

/*
export default function  InstruccionTwoScreen(props) {
    const { navigation }=props;
    const goToPage= (routename) => {
         navigation.navigate(routename)
    } 

    return (
    <View>
        <TextTitle texttitle="Rules"/>  
        <TextParragraf textparragraf="The selected person choose a card"/>
        <ButtomGreen titlename="Next" linkdirection={() => goToPage("Home")}/>
    </View>
  )
}
*/

export default function InstruccionTwoScreen(props) {
  const { navigation } = props;
  const goToPage = (routename) => {
    navigation.navigate(routename)
  }

  const { width } = useWindowDimensions();

  const DATA = [{
    listtexttitle: 'Rules',
    listtextparragraf: 'Please party responsibly. Never do something to put yourself or anyone in danger. Have fun!',
  },
  {
    listtexttitle: 'Rules',
    listtextparragraf: 'Click The Wheel',
  },
  {
    listtexttitle: 'Rules',
    listtextparragraf: 'Click The Wheel',
  },
  {
    listtexttitle: 'Rules',
    listtextparragraf: 'Click The Wheel',
  }

  ];

  const Item = ({ listtexttitle, listtextparragraf }) => (

    <View style={[styles.separatorcss, { width }]} >
      <View style={{ marginTop: 24 }}>
        <TextTitle texttitle={listtexttitle} />
      </View>
      <View style={{ marginTop: 13, marginHorizontal: 20, marginBottom: 20 }}>
        <TextParragraf textparragraf={listtextparragraf} />
      </View>
    </View>

  );

  return (
    <View style={styles.containercss}>

      <View style={styles.tarjetcss}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item listtexttitle={item.listtexttitle} listtextparragraf={item.listtextparragraf} />}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
        />
      </View>

      <View style={{ marginBottom: 20 }}>
        <ButtomGreen titlename="Next" linkdirection={() => goToPage("RuletteScreen")} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({

  containercss: {
    backgroundColor: '#2E2E3E',
    flex: 1,
    justifyContent: 'flex-end',





  },

  tarjetcss: {


    marginBottom: 26,
    borderRadius: 8,
    backgroundColor: 'red',



  },

  separatorcss: {
    backgroundColor: '#222525',
    marginHorizontal: 16,
    paddingHorizontal: 39,
    borderRadius: 8,

  }

});

