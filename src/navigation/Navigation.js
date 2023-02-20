import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Components create for the proyect.
import HomeScreen from '../screens/HomeScreen';
import InstructionOneScreen from '../screens/InstructionOneScreen';
import InstructionTwoScreen from '../screens/InstructionTwoScreen';
import RuletteScreen from '../screens/RuletteScreen';
const Stack = createNativeStackNavigator();


export default function Navigation() {
    return (
        <Stack.Navigator r>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="InstruccionOneScreen" component={InstructionOneScreen} />
            <Stack.Screen name="InstruccionTwoScreen" component={InstructionTwoScreen} />
            <Stack.Screen name="RuletteScreen" component={RuletteScreen} />
        </Stack.Navigator>
    )
}