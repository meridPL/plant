/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View, Text
} from 'react-native';

import MainScreen from './src/MainView/main.screen';
import { colorPallete } from './src/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameScreen from './src/MainView/game.screen';
import store from './src/mobx/store';
import { ContextProvider } from './src/components/ContextApp';


const Stack = createNativeStackNavigator();


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: "white",
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View style={{ height: 50, backgroundColor: colorPallete.headerColor, justifyContent: 'center', paddingHorizontal: 16 }}>
          <Text style={{ color: 'white' }}>Home Garden App</Text>
        </View>
        <ContextProvider value={store} >
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="Home" component={MainScreen} />
              <Stack.Screen name="Game" component={GameScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </ContextProvider>
        {/* <MainScreen /> */}
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
