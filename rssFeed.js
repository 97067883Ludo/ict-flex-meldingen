import React, { useState, useEffect } from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import EventCard from "./Components/Card";

const FetchRSSFeed = () => {
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
        items.push(<EventCard key={i} Title={feedData.items[i].title} Message={feedData.items[i].description}></EventCard>)
    }

    return (
        <View style={Styles.Cards}>
            {items}
        </View>
        );
};


export default FetchRSSFeed;
