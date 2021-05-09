import React from 'react'
import { Text, View, FlatList, StyleSheet, Button } from 'react-native'




const HomePage = ({ navigation }) => {


    return (
        <View style={{ flex: 1, margin: 20 }}>

            <View style={{ padding: 20 }}>
                <Button
                    style={{ padding: 10 }}
                    title="Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={{ padding: 20 }}>
                <Button
                    style={{ padding: 10 }}
                    title="About page"
                    onPress={() => navigation.navigate('About')}
                />
            </View>

            <View style={{ padding: 20 }}>
                <Button
                    style={{ padding: 10 }}
                    title="Detail Page"
                    onPress={() => navigation.navigate('Detail')}
                />
            </View>

        </View>
    )
}




export default HomePage;