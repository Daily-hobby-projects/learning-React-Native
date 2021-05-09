import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ColorBox from './colorBox'



const AboutPage = ({ route }) => {

    const { colors } = route.params;
    const renderItem = ({ item }) => {
        return (
            <ColorBox color={item.color} colorCode={item.colorCode} />
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