import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import ColorBox from './colorBox'


const FrontEnd = ({ route }) => {

    const { colors } = route.params;

    const renderItem = ({ item }) => (
        <ColorBox color={item.color} colorCode={item.colorCode} />
    )
    return (
        <View>
            <FlatList
                data={colors}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default FrontEnd