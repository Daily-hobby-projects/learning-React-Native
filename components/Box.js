import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Box = ({ colorCode }) => {
    const boxStyle = {
        backgroundColor: colorCode,
        width: 20,
        height: 20

    }
    return (
        <View style={boxStyle}>
            <Text>l</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {

    }
})

export default Box;