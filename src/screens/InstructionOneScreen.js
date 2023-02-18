import { View,StyleSheet} from 'react-native'
import React from 'react'
//Components create for the proyect.
import TextTitle from '../components/Title'
import ButtomGreen from '../components/Buttoms'
import TextParragraf from '../components/Parragraf';
import ImageInstruction from '../components/Images';


export default function  InstructionOneScreen(props) {
    const { navigation }=props;
    const goToPage= (routename) => {
         navigation.navigate(routename)
    } 

    
  return (

  <View style={styles.containercss}>
  <View style={styles.tarjetcss}>   
    <View style={{marginTop:24}}>
      <TextTitle texttitle="Rules" /> 
    </View>
    <View style={{marginTop:13,marginHorizontal:20}}>
      <TextParragraf textparragraf="Click The Wheel"/>
    </View>
    <View>
    <ImageInstruction fileimage={require('../assets/imgs/ruleta.png')} />
    </View>
    <View style={{marginTop:40,marginBottom:20}}>
      <ButtomGreen titlename="Next" linkdirection={() => goToPage("InstruccionTwoScreen")}/>
    </View>
  </View>
  </View>

  
  )
}

const styles = StyleSheet.create({
  containercss:{
    flex:1,
    backgroundColor:'#2E2E3E',
    paddingHorizontal:16,
    justifyContent:'flex-end',

  },
  tarjetcss:{
    backgroundColor:'#222525',
    paddingHorizontal:39,
    marginBottom:26,
    borderRadius:8
    
  },
  
});