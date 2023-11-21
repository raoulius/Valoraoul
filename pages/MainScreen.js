// Main_Screen.js

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Main_Screen = () => {
  const navigation = useNavigation();

  const navigateToAgents = () => {
    navigation.navigate('AgentScreen');
  };

  const navigateToGameModes = () => {
    navigation.navigate('GameModesScreen');
  };

  const navigateToWeapons = () => {
    navigation.navigate('weaponScreen');
;  }

  return (
    <View style={styles.container}>
      <Image
        source={require('/Users/rajendraritmanto/valoraoul/valoraoul/assets/valorant-logo.png')}
        style={styles.logoImage}
      />

      <TouchableOpacity onPress={navigateToAgents} style={styles.navigationButton}>
        <Text style={styles.navigationText}>AGENTS</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToGameModes} style={styles.navigationButton}>
        <Text style={styles.navigationText}>GAME MODES</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToWeapons} style={styles.navigationButton}>
        <Text style={styles.navigationText}>WEAPONS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FD4556',
  },
  logoImage: {
    width: '80%', // Adjust the width as needed
    height: 100, // Adjust the height as needed
    resizeMode: 'contain',
    marginBottom: 16, // Add margin as needed
  },
  navigationButton: {
    width: '50%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    alignItems: 'center',
  },
  navigationText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
});

export default Main_Screen;
