import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native'
import ColorBox from './colorBox'

const Detail = ({ route }) => {
    const { colors, title } = route.params;

    const renderItem = ({ item }) => (
        <ColorBox color={item.color} colorCode={item.colorCode} />
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={colors}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.container}
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

export default Detail