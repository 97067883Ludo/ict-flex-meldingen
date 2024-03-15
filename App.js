import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import React, {useState, useEffect} from 'react';
import RSSFeed from "./rssFeed";
import SafeViewAndroid from "./Components/SafeViewAndroid";
import Header from "./Components/Header";


export default function App() {
  
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
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <StatusBar
        barStyle={statusBarStyle}
        hidden={false}
      />
      <Header></Header>
      <ScrollView>
        <RSSFeed></RSSFeed>
      </ScrollView>
    </SafeAreaView>
  );
}