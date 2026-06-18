import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  // This state tracks the text shown on screen
  const [suggestion, setSuggestion] = useState<string>("Press the button for a gentle movement idea.");

  const handlePress = (): void => {
    setSuggestion("Try 2 minutes of gentle seated neck stretches. Listen to your body and breathe deeply.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Wellness</Text>
      
      <View style={styles.card}>
        <Text style={styles.suggestionText}>{suggestion}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Get Gentle Activity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f8', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, color: '#333' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 15, marginBottom: 30, width: '80%', alignItems: 'center' },
  suggestionText: { fontSize: 18, textAlign: 'center', color: '#555' },
  button: { backgroundColor: '#4a90e2', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 25 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' }
});