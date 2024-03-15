import React, { useState, useEffect } from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cards from "./Components/Cards";


const FetchRSSFeed = () => {


    const Stack = createNativeStackNavigator();

    const Styles = StyleSheet.create({
        Cards: {
            padding: 24
        }
    })
};

export default FetchRSSFeed;
