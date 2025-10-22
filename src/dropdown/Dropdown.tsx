import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

interface MenuItem {
  name: string;
  price: string;
  description: string;
}

interface DropdownProps {
  title: string;
  items: MenuItem[];
}

const DropdownSection: React.FC<DropdownProps> = ({ title, items }) => {
  const [expanded, setExpanded] = useState(false);

  const[Name, setCourse] = useState('');
    const[Surname, setDescription] = useState('');
    const [Error, setPrice] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.arrow}>{expanded ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {/* Items */}
      {expanded && (
        <View style={styles.content}>
          {items.length === 0 ? (<Text style={styles.emptyText}>No items yet</Text> ) : (
            items.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.price}>R {item.price}</Text>
                </View>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            ))
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#4a2600',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#5a2d00',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f5f5dc', 
  },
  arrow: {
    fontSize: 18,
    color: '#f5f5dc',
  },
  content: {
    paddingVertical: 8,
  },
  emptyText: {
    color: '#dcdcdc',
    fontStyle: 'italic',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomColor: '#7a4f00',
    borderBottomWidth: 1,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 18,
    color: '#ffffff',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d4af37', 
  },
  description: {
    fontSize: 14,
    color: '#dcdcdc',
    marginTop: 4,
  },
});

export default DropdownSection;