import React from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Button,
    TouchableOpacity,
} from 'react-native';

import Box from './Box'
import ColorBox from './colorBox'

const RAINBOW = [
    { id: 1, color: 'Red', hexCode: '#FF0000' },
    { id: 2, color: 'Orange', colorCode: '#FF7F00' },
    { id: 3, color: 'Yellow', colorCode: '#FFFF00' },
    { id: 4, color: 'Green', colorCode: '#00FF00' },
    { id: 5, color: 'Violet', colorCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
    { id: 1, color: 'Red', colorCode: '#c02d28' },
    { id: 2, color: 'Black', colorCode: '#3e3e3e' },
    { id: 3, color: 'Grey', colorCode: '#8a8a8a' },
    { id: 4, color: 'White', colorCode: '#ffffff' },
    { id: 5, color: 'Orange', colorCode: '#e66225' },
];

const COLORS = [
    { id: 1, color: 'White', colorCode: '#FF0000' },
    { id: 2, color: 'Cyan', colorCode: '#00FFFF' },
    { id: 3, color: 'Silver', colorCode: '#C0C0C0' },
    { id: 4, color: 'Blue', colorCode: '#0000FF' },
    { id: 5, color: 'Gray or Grey', colorCode: '#808080' },

];

const HomePage = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <Box colorCode={item.colorCode} />
    )
    return (
        <View style={{ flex: 1, margin: 20 }}>
            <View style={styles.formGroup}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.textCenter}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.formGroup}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('About', {
                            name: 'Color Pallette',
                            colors: COLORS,
                        })
                    }>
                    <View style={styles.flexContainer} >
                        <Text>Colors</Text>
                        <FlatList
                            style={styles.flexContainer}
                            data={COLORS}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.formGroup}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate(
                            'Detail',

                            { title: 'Rainbow', colors: RAINBOW },
                        )
                    }>
                    <View >
                        <Text>Rainbow</Text>
                        <FlatList
                            style={styles.flexContainer}
                            data={RAINBOW}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.formGroup}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate(
                            'FrontEnd',

                            { title: 'FrontEnd Masters', colors: FRONTEND_MASTERS },
                        )
                    }>
                    <View >
                        <Text>FrontEnd Masters</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ width: 20, height: 50, backgroundColor: "blue" }}>
                                l
                            </Text>
                            <Text style={{ width: 20, height: 20, backgroundColor: "red" }}>
                                l
                            </Text>
                            <Text style={{ width: 20, height: 20, backgroundColor: "blue" }}>
                                l
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 20,
        backgroundColor: 'dodgerblue',
        borderRadius: 20,
    },
    textCenter: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: 'bold',
    },
    formGroup: {
        padding: 20,
    },
    formContainer: {
        flexDirection: 'row'
    }
});

export default HomePage;
