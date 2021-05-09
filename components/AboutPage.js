import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ColorBox from './colorBox'


const colors = [
    { id: 1, color: "White", colorCode: "#FF0000" },
    { id: 2, color: 'Cyan', colorCode: "#00FFFF" },
    { id: 3, color: 'Silver', colorCode: "#C0C0C0" },
    { id: 4, color: 'Blue', colorCode: "#0000FF" },
    { id: 5, color: 'Gray or Grey', colorCode: "#808080" },
    { id: 6, color: 'DarkBlue', colorCode: "#0000A0" },
    { id: 7, color: 'Black', colorCode: "#000000" },
    { id: 8, color: 'LightBlue', colorCode: "#ADD8E6" },
    { id: 9, color: 'Orange', colorCode: "#FFA500" },
    { id: 10, color: 'Purple', colorCode: "#800080" },
    { id: 11, color: 'Brown', colorCode: "#A52A2A" },
    { id: 12, color: 'Yellow', colorCode: "#FFFF00" },
    { id: 13, color: 'Maroon', colorCode: "#800000" },
    { id: 14, color: 'Lime', colorCode: "#00FF00" },
    { id: 15, color: 'Green', colorCode: "#008000" },
    { id: 16, color: 'Magenta', colorCode: "#FF00FF" }
]

const AboutPage = () => {

    const renderItem = ({ item }) => {
        return (
            <ColorBox colorname={item.color} colorCode={item.colorCode} />
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.color, styles.blacktext}>Here are some of the different colors</Text>
            <FlatList
                data={colors}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    blacktext: {
        color: 'black',
        fontSize: 18,
        padding: 10
    },
    container: {
        marginVertical: 20,
        marginHorizontal: 20
    }
})

export default AboutPage;