import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../styles';

export const TestButton = ({ label, color = "white", onAction }) => (
    <TouchableOpacity
      onPress={onAction}
      style={[styles.testViewButton, { backgroundColor: color }]}>
      <Text style={styles.testViewButtonLabel}>{label}</Text>
    </TouchableOpacity>
  )