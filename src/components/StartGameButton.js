import React from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import { styles } from '../styles';

export const StartGameButton = ({ onAction }) => (
    <TouchableOpacity
        onPress={onAction}
        style={styles.startGameButton}>
        <Text style={styles.testViewButtonLabel}>Hello gardener! Let's start the test!</Text>
    </TouchableOpacity>
)