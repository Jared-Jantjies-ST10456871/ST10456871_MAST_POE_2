import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

interface MenuItem {
  name: string;
  price: string;
  description: string;
}

export default function App() {
  const [starters, setStarters] = useState<MenuItem[]>([]);
  const [mains, setMains] = useState<MenuItem[]>([]);
  const [desserts, setDesserts] = useState<MenuItem[]>([]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'Starters' | 'Mains' | 'Desserts'>('Starters');

  const handleAddItem = () => {
    if (!name || !price || !description) return;
    const newItem: MenuItem = { name, price, description };

    if (selectedCategory === 'Starters') setStarters([...starters, newItem]);
    if (selectedCategory === 'Mains') setMains([...mains, newItem]);
    if (selectedCategory === 'Desserts') setDesserts([...desserts, newItem]);

    setName('');
    setPrice('');
    setDescription('');
  };

  const handleDeleteItem = (index: number, category: string) => {
    if (category === 'Starters') setStarters(starters.filter((_, i) => i !== index));
    if (category === 'Mains') setMains(mains.filter((_, i) => i !== index));
    if (category === 'Desserts') setDesserts(desserts.filter((_, i) => i !== index));
  };

  const totalItems = starters.length + mains.length + desserts.length;

  const renderItems = (items: MenuItem[], category: string) =>
    items.map((item, index) => (
      <View key={index} style={styles.menuItem}>
        <View style={styles.menuTextContainer}>
          <Text style={styles.menuText}>{item.name} - R{item.price}</Text>
          <Text style={styles.menuDesc}>{item.description}</Text>
        </View>
        <TouchableOpacity onPress={() => handleDeleteItem(index, category)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    ));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      {/* Add Item Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Dish Name"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="#ccc"
          value={description}
          onChangeText={setDescription}
        />

        <View style={styles.categorySelector}>
          {['Starters', 'Mains', 'Desserts'].map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.activeCategoryButton,
              ]}
              onPress={() => setSelectedCategory(category as any)}
            >
              <Text style={styles.categoryButtonText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
      </View>

      {/* Display Menu Items */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>Starters</Text>
        {renderItems(starters, 'Starters')}

        <Text style={styles.sectionTitle}>Mains</Text>
        {renderItems(mains, 'Mains')}

        <Text style={styles.sectionTitle}>Desserts</Text>
        {renderItems(desserts, 'Desserts')}
      </ScrollView>

      {/* Total Counter */}
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Total Items: {totalItems}</Text>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

/*(React native. 2025)*/

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
    marginBottom: 10,
  },
  form: {
    backgroundColor: '#5a2e00',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#7a4a00',
    color: 'white',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  categorySelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#7a4a00',
    borderRadius: 8,
  },
  activeCategoryButton: {
    backgroundColor: '#a27c00',
  },
  categoryButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#a27c00',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 15,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5a2e00',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuDesc: {
    color: '#ddd',
    fontSize: 14,
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  counterContainer: {
    padding: 15,
    backgroundColor: '#7a4a00',
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  counterText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});