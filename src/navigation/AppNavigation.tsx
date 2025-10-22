import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import FilterScreen from '../screens/FilterScreen';
import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';
import { Ionicons } from '@expo/vector-icons';

export type RootTabParamList = {
    Home: undefined;
    Add: undefined;
    Filter: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const screenOptions: (props: { route: any }) => BottomTabNavigationOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName: React.ComponentProps<typeof Ionicons>['name'] = 'alert-circle';

        if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
        }
         else if (route.name === 'AddMenuItem') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
        }
        else if (route.name === 'FilterScreen') {
            iconName = focused ? 'filter' : 'filter-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
    },

    tabBarActiveTintColor: '#ffffff',
    tabBarInactiveTintColor: '#d4d4d4',
    tabBarStyle: {
        backgroundColor: '#a27c00',  
        height: 60,
        borderTopWidth: 0,
    },
    tabBarLabelStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerShown: false, 
    
});

export default function AppNavigator() {
    
    return (
        <Tab.Navigator screenOptions={screenOptions} id={undefined}>
            <Tab.Screen name='Filter' component={FilterScreen} />
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Add' component={AddScreen} />
        </Tab.Navigator>
    );
}