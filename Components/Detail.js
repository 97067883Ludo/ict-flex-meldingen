import {Button, View, Text, StyleSheet} from "react-native";

export default function Detail({route}) {
    
    const { Title } = route.params
    const { Message } = route.params
    const { pubDate } = route.params
    
    const Styles = StyleSheet.create({
        titleText: {
            fontSize: 24,
            marginBottom: 10
        },
        messageText: {
           fontSize: 16,
            marginBottom:10
        },
        ViewMargin: {
           margin: 25
        },
        pubDateText: {
            
        }
    });
    
    let date = new Date(pubDate)
    console.log(date)
    return (
        <View style={Styles.ViewMargin}>
            <Text style={Styles.titleText}>
                {Title}
            </Text>
            <Text style={Styles.messageText}>
                {Message}
            </Text>
            <Text style={Styles.messageText}>
                geplaats op: {date.getDay()}-{date.getMonth()}-{date.getFullYear()} om {date.getHours()}:{date.getMinutes()} 
            </Text>
        </View>
    )
}