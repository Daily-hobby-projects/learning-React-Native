import 'react-native-gesture-handler'
import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, FlatList, ScrollView } from 'react-native'
import ColorBox from './components/colorBox'
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'
import Detail from './components/DetailPage'
import FrontEnd from './components/Fronend'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator();

const App = () => {

  const homeOptions = {
    title: 'Home'
  }
  const aboutOptions = {
    title: 'Color Pallete'
  }

  const detailOptions = {
    title: 'Raibbow'
  }
  const frontendOptions = {
    title: 'FrontEnd Masters'
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={homeOptions} />
        <Stack.Screen name="About" component={AboutPage} options={aboutOptions} />
        <Stack.Screen name="Detail" component={Detail} options={detailOptions} />
        <Stack.Screen name="FrontEnd" component={FrontEnd} options={frontendOptions} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}





export default App