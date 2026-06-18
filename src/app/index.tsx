import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [mobility, setMobility] = useState<number>(5); // Default to middle (5)
  const [suggestion, setSuggestion] = useState<string>("Select your mobility level above to get a personalized idea.");

  const generateExercise = (): void => {
    if (mobility <= 2) {
      setSuggestion(
        "✨ Gentle Bed & Chair Support (Level 1-2):\n\nTry 3 minutes of gentle seated cat-cow movements and slow shoulder rolls. Focus entirely on your breathing and unlocking tightness in your lower back."
      );
    } else if (mobility <= 5) {
      setSuggestion(
        "✨ Seated & Supported Routine (Level 3-5):\n\nTry 5 minutes of seated leg lifts (lifting your knees gently toward the sky) and supported hip openers while sitting comfortably in a sturdy chair."
      );
    } else if (mobility <= 8) {
      setSuggestion(
        "✨ Standing Low-Impact Balance (Level 6-8):\n\nTry 5 minutes of chair-assisted wall sits and slow, mindful marching in place. This helps build core strength and steady balance."
      );
    } else {
      setSuggestion(
        "✨ Pilates Joint-Strength Routine (Level 9-10):\n\nTry a 10-minute mat Pilates routine focusing on core stability. If you feel up to it, you can hold light 1-2 lb weights during arm circles to gently strengthen your shoulders."
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daily Wellness Flow</Text>
      <Text style={styles.subtitle}>Listen to your body. Where is your mobility level today?</Text>

      {/* 1 to 10 Selector */}
      <View style={styles.scaleContainer}>
        <Text style={styles.scaleLabel}>🛋️ Very Low</Text>
        <Text style={styles.scaleLabel}>⚡ Very High</Text>
      </View>

      <View style={styles.buttonRow}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <TouchableOpacity
            key={num}
            style={[
              styles.numberButton,
              mobility === num && styles.selectedButton
            ]}
            onPress={() => setMobility(num)}
          >
            <Text style={[styles.numberText, mobility === num && styles.selectedNumberText]}>
              {num}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Main Action Button */}
      <TouchableOpacity style={styles.actionButton} onPress={generateExercise}>
        <Text style={styles.actionButtonText}>Get My Gentle Routine</Text>
      </TouchableOpacity>

      {/* Display Suggestion */}
      <View style={styles.card}>
        <Text style={styles.suggestionText}>{suggestion}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#f0f4f8', alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10, color: '#2c3e50', textAlign: 'center' },
  subtitle: { fontSize: 16, marginBottom: 25, color: '#7f8c8d', textAlign: 'center', paddingHorizontal: 10 },
  scaleContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 10, marginBottom: 5 },
  scaleLabel: { fontSize: 12, fontWeight: '600', color: '#95a5a6', uppercase: true },
  buttonRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 30 },
  numberButton: { width: 45, height: 45, borderRadius: 23, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#dcdde1' },
  selectedButton: { backgroundColor: '#4a90e2', borderColor: '#4a90e2' },
  numberText: { fontSize: 16, fontWeight: 'bold', color: '#2c3e50' },
  selectedNumberText: { color: '#fff' },
  actionButton: { backgroundColor: '#2ecc71', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 25, marginBottom: 30, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 3 },
  actionButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  card: { backgroundColor: '#fff', padding: 25, borderRadius: 15, width: '100%', minHeight: 120, justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 5 },
  suggestionText: { fontSize: 16, textAlign: 'center', color: '#34495e', lineHeight: 24 }
});