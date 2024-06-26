import React, { useState, useEffect } from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import EventCard from "./Card";
import Header from './Header';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Cards({navigation}) {

    const storage = new Storage({
        size: 100,
        storageBackend: AsyncStorage,
        defaultExpires: null,
      });

    const [feedData, setFeedData] = useState(null);

    const Styles = StyleSheet.create({
        Cards: {
            padding: 24
        }
    })

    useEffect(() => {
        const fetchRSSFeed = async () => {
            try {
                if (feedData !== null) {
                    return
                }
                const response = await fetch('https://rss.bjvanbemmel.nl/ict-flex');
                const responseData = await response.text();
                const parsedData = await rssParser.parse(responseData);

                setFeedData(parsedData);
                console.log(parsedData)
                storage.save({key: "lastRssData", data: {"data": responseData}})
            } catch (error) {  }
        };

        fetchRSSFeed();

    });

    if (!feedData) {
        return (
            <View>
                <ActivityIndicator size="large" style={{marginTop: 25}} />
            </View>
        );
    }

    let items = [];

    for (let i = 0; i < feedData.items.length; i++){
        items.push(
            <TouchableOpacity key={i} onPress={() => {
                navigation.navigate('Detail', {Title: feedData.items[i].title, Message: feedData.items[i].description, pubDate: feedData.items[i].published})
            }}>
                <EventCard Key={i} Title={feedData.items[i].title} Message={feedData.items[i].description} key={i}></EventCard>
            </TouchableOpacity>
                )
            
    }
    
    if (!feedData) {
        return (
            <View>
                <ActivityIndicator size="large" style={{marginTop: 25}} />
            </View>
            );
    }
    
    return (
        <View>
            <ScrollView>
                <View style={{marginBottom: 10, marginTop: 10, paddingLeft: 25, paddingRight: 25,}}>
                    {items}
                </View>
                
            </ScrollView>
        </View>
    )
}

export default Cards;