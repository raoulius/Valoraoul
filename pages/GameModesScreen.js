// GameModesScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GameModesScreen = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Filter data based on searchQuery
    const filtered = data.filter(
      (item) =>
        item.displayName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://valorant-api.com/v1/gamemodes');
      const result = await response.json();

      // Exclude "Onboarding" and "Practice" game modes
      const filteredData = result.data.filter(
        (item) =>
          item.displayName !== 'Onboarding' && item.displayName !== 'PRACTICE'
      );
      setData(filteredData);
      setFilteredData(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const navigateToGameModeDetail = (item) => {
    navigation.navigate('GameModeDetailScreen', { item });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Game Modes"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.uuid}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigateToGameModeDetail(item)}
              style={styles.cardContainer}
            >
              <Image
                source={{ uri: item.displayIcon }}
                style={styles.gameModeIcon}
              />
              <Text style={styles.cardText}>
                {item.displayName || 'Name not available'}
              </Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>No results</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  cardContainer: {
    backgroundColor: '#FD4556',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  gameModeIcon: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 8,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GameModesScreen;
