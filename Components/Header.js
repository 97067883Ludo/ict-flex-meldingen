import {StyleSheet, Image, View, Text} from "react-native";

export default function Header() {
    const Styles = StyleSheet.create({
        Header: {
            padding: 24,
            backgroundColor: '#eaeaea'
        },
        Text: {
            marginTop: 10,
            fontWeight: 'bold',
            fontSize:24
        }
    })
    
    return (
        <View>
            <View style={Styles.Header}>
                <Image style={{width: 200, height: 50, resizeMode: 'contain'}} source={require('./ICT-Flex-v2.png')} />
                <Text style={Styles.Text}>ICT-Flex - Announcements</Text>
            </View>
            <View
                style={{
                borderBottomColor: '#EF7E05',
                    borderBottomWidth: 4,
                }}
            />
        </View>
    
    )
}
