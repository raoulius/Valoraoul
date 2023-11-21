// GameModesScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GameModesScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://valorant-api.com/v1/gamemodes');
      const result = await response.json();

      // Exclude "Onboarding" and "Practice" game modes
      const filteredData = result.data.filter(item => item.displayName !== 'Onboarding' && item.displayName !== 'PRACTICE');
      setData(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const navigateToGameModeDetail = (item) => {
    navigation.navigate('GameModeDetailScreen', { item });
  };

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.uuid}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToGameModeDetail(item)} style={styles.cardContainer}>
              <Image source={{ uri: item.displayIcon }} style={styles.gameModeIcon} />
              <Text style={styles.cardText}>{item.displayName || 'Name not available'}</Text>
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
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
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
