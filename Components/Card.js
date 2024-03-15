import {StyleSheet, Text, View} from "react-native";

export default function EventCard({key, Author, Title, Message}) {
    
    const Styles = StyleSheet.create({
        Title: {
            fontSize: 18,
            fontWeight: 'bold'
        },
        Card: {
            padding: 10,
            borderWidth: 2,
            borderRadius: 5,
            borderColor: '#EF7E05',
            backgroundColor: '#eaeaea',
            marginBottom: 10
        }
    })
    
    if(Message.length > 100) {
        let Substring = "";
        console.log(Message)
        for (let i = 0; i < 100; i++) {
            Substring += Message[i];
        }
        Substring += "... Lees meer";
        Message = Substring;
    }
    
    return (
        <View key={key} style={Styles.Card} >
            <Text style={Styles.Title}>{Title}</Text>
            <Text>{Message}</Text>
            <Text>{Author}</Text>
        </View>
    )
} 