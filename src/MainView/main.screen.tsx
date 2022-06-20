import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  View,
} from 'react-native';
import { StartGameButton } from '../components/StartGameButton';
import { styles } from '../styles';
import { Props } from '../types/stack';


const MainScreen = ({navigation} : Props) => {
  return (

      <View style={styles.container}>
        {/* This is just a placeholder, you can change any code here freely :) */}
        <StartGameButton onAction={async () => {
          navigation.navigate("Game")
        
        }} />
      </View>
  );
};

export default MainScreen;
