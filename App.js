import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//Components create for the proyect.
import Navigation from './src/navigation/Navigation';


import { useFonts } from 'expo-font';

export default function App() {


  const [fontLoaded] = useFonts({

    RobotoRegular: require("./src/assets/fonts/Roboto-Regular.ttf"),
    RobotoCondensed: require("./src/assets/fonts/RobotoCondensed-Regular.ttf"),
    RobotoSlab: require("./src/assets/fonts/RobotoSlab-Regular.ttf")
  })


  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
