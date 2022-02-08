import React from 'react';
import {
  View,
} from 'react-native';
import { StartGameButton } from '../components/StartGameButton';
import { styles } from '../styles';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      {/* This is just a placeholder, you can change any code here freely :) */}
      <StartGameButton onAction={() => { }} />
    </View>
  );
};

export default MainScreen;
