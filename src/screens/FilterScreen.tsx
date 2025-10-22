import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter</Text>
      <Text style={styles.body}>Coming Soon...</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3d1f00', 
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 50,
  },
  body: {
    color: 'white',
    fontSize: 26,
    marginTop: 100,
  },
});
