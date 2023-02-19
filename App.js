import 'react-native-gesture-handler';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//Components create for the proyect.
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation/>   
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