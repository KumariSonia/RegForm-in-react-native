import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Register from './app/Register';
import styles from './app/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Register />
      </ScrollView>
    </SafeAreaView>
  );
}


