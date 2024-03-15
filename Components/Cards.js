import React, { useState, useEffect } from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import EventCard from "./Card";

function Cards({navigation}) {

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
                const response = await fetch('http://192.168.178.138:8080/');
                const responseData = await response.text();
                const parsedData = await rssParser.parse(responseData);
                setFeedData(parsedData);
                console.log(parsedData)
            } catch (error) {
                console.error('Error fetching RSS feed:', error);
            }
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
    
    console.log(items)
    
    if (!feedData) {
        return (
            <View>
                <ActivityIndicator size="large" style={{marginTop: 25}} />
            </View>
            );
    }
    
    return (
        <View style={{marginTop:10}}>
            <ScrollView style={{paddingLeft: 25, paddingRight: 25, marginBottom: 10, }}>
                {items}
            </ScrollView>
        </View>
    )
}

export default Cards;