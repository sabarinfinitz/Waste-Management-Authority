import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// Import existing OCRScreen from main project
import OCRScreen from '../src/ocr/OCRScreen';

export default function App() {
  // provide a dummy navigation object with goBack to satisfy the component
  const dummyNav = { goBack: () => {} };
  return (
    <SafeAreaView style={styles.container}>
      <OCRScreen navigation={dummyNav} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
});
