import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Address from './app/Address';
import Register from './app/Register';
import styles from './app/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Address />
        {/* <Register /> */}
      </ScrollView>
    </SafeAreaView>
  );
}


