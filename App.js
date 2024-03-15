import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cards from "./Components/Cards";
import 'react-native-gesture-handler';
import Detail from "./Components/Detail";

export default function App() {
  
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
  
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState('default');
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={Cards}  />
        <Stack.Screen name={"Detail"} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}