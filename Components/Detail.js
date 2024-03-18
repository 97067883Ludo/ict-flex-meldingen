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
    
    const date = new Date(pubDate)

    let dateText = "Geplaats: "

    if(isToday(date)) {
        dateText += `Vandaag om ${date.getHours()}:${date.getMinutes()}`
    } else {
        dateText += `${date.getDay()}-${date.getMonth()}-${date.getFullYear()} om ${date.getHours()}:${date.getMinutes()}`
    }

    return (
        <View style={Styles.ViewMargin}>
            <Text style={Styles.titleText}>
                {Title}
            </Text>
            <Text style={Styles.messageText}>
                {Message}
            </Text>
            <Text style={Styles.messageText}>
                {dateText} 
            </Text>
        </View>
    )
}

function isToday(date) {
    const today = new Date();
    return date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear();
}

