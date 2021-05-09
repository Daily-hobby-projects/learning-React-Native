import 'react-native-gesture-handler'
import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, FlatList, ScrollView } from 'react-native'
import ColorBox from './components/colorBox'
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'
import Detail from './components/DetailPage'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="About" component={AboutPage} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}





export default App