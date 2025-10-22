import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import DropdownSection from '../dropdown/Dropdown';
import { MenuItem } from '../../Types';

export default function App() {
  // Start with empty menu arrays
  const mains: MenuItem[] = [];
  const starters: MenuItem[] = [];
  const desserts: MenuItem[] = [];


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <DropdownSection title="Starters" items={starters} />
        <DropdownSection title="Mains" items={mains} />
        <DropdownSection title="Desserts" items={desserts} />
      </ScrollView>

      <StatusBar style="light" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d1f00',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    alignItems: 'center',       
    paddingBottom: 40,
  },
});