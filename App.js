import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cards from "./Components/Cards";
import 'react-native-gesture-handler';
import Detail from "./Components/Detail";
import registerNNPushToken from 'native-notify';

export default function App() {
  
  registerNNPushToken(20592, 'SXLdoLyqSdbIDQtBhPhc5d');
  
  const Stack = createNativeStackNavigator();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ECF0F1',
    },
    buttonsContainer: {
      padding: 10,
    },
    textStyle: {
      marginBottom: 8,
    },
  });
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={Cards}/>
        <Stack.Screen name={"Detail"} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 