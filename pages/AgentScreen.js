// Import necessary components and hooks
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';

const AgentScreen = ({ navigation }) => {
  // State variables
  const [agents, setAgents] = useState([]);
  const [filteredAgents, setFilteredAgents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch agents data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch agents data from API
  const fetchData = async () => {
    try {
      const response = await fetch('https://valorant-api.com/v1/agents');
      const result = await response.json();

      // Filter out non-playable characters
      const playableAgents = result.data.filter((agent) => agent.isPlayableCharacter === true);

      setAgents(playableAgents);
      setFilteredAgents(playableAgents); // Set filteredAgents initially to all agents
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Navigate to agent detail screen
  const navigateToDetail = (agent) => {
    navigation.navigate('DetailScreen', { item: agent });
  };

  // Render agent card
  const renderAgentCard = (agent) => (
    <TouchableOpacity style={styles.agentCard} onPress={() => navigateToDetail(agent)}>
      {/* Render agent card content here */}
      <Image source={{ uri: agent.displayIconSmall }} style={styles.agentImage} />
      <Text style={styles.agentName}>{agent.displayName}</Text>
      <Text style={styles.agentRole}>{agent.role?.displayName}</Text>
    </TouchableOpacity>
  );

  // Render separator based on agent role
  const renderSeparator = (role) => (
    <View style={styles.separator} key={role}>
      <Text style={styles.separatorText}>{role}</Text>
    </View>
  );

  // Key extractor function for FlatList
  const keyExtractor = (item) => item.uuid;

  // Handle search input change
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = agents.filter(
      (agent) =>
        agent.displayName.toLowerCase().includes(query.toLowerCase()) ||
        (agent.role?.displayName && agent.role.displayName.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredAgents(filtered);
  };

  return (
    <View style={styles.container}>
      {/* Search bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search Agents"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* FlatList of agents */}
      <FlatList
        data={filteredAgents}
        renderItem={({ item, index }) => (
          <>
            {index === 0 || filteredAgents[index - 1]?.role?.displayName !== item.role?.displayName
              ? renderSeparator(item.role?.displayName)
              : null}
            {renderAgentCard(item)}
          </>
        )}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFBF5',
  },
  agentCard: {
    backgroundColor: '#FD4556',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  agentImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  agentName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  agentRole: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  separator: {
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  separatorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FD4556',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default AgentScreen;
