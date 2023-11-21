// GameModeDetail.js

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const GameModeDetail = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.displayIcon }} style={styles.gameModeIcon} />
      <Text style={styles.heading}>{item.displayName}</Text>
      <Text style={styles.label}>Duration: {item.duration}</Text>
      <Text style={styles.label}>Allows Match Timeouts: {item.allowsMatchTimeouts ? 'Yes' : 'No'}</Text>
      {item.roundsPerHalf !== -1 && (
        <Text style={styles.label}>Rounds Per Half: {item.roundsPerHalf}</Text>
      )}


      {/* Add more details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  gameModeIcon: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 16,
    borderRadius: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  // Add more styles for additional details
});

export default GameModeDetail;
