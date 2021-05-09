import React from 'react';

import { Text, View, StyleSheet } from 'react-native';


const ColorBox = ({ color, colorCode }) => {

    const box = {
        backgroundColor: colorCode,
        color: 'white',
        fontWeight: 'bold',
        padding: 20,
    }
    return (
        <View style={styles.color}>
            <Text style={box}>
                {color} : {colorCode}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    color: {
        padding: 10,
        fontWeight: 'bold',
        color: 'white',
        fontWeight: 'bold'
    },

})

export default ColorBox;