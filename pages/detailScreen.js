import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

// Custom Card component
const Card = ({ children }) => (
  <View style={styles.card}>
    {children}
  </View>
);

const DetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.fullPortrait }} style={styles.agentImage} />
      <Text style={styles.heading}>{item.displayName}</Text>

      {/* Card for Description */}
      <Card>
        <Text style={styles.label}>Description: {item.description}</Text>
      </Card>

      {/* Card for Role */}
      <Card>
        <Text style={styles.label}>Role: {item.role?.displayName}</Text>
      </Card>

      {/* Card for Abilities */}
      <Card>
        <Text style={styles.label}>Abilities:</Text>
        {item.abilities.map((ability) => (
          <View style={styles.abilityContainer} key={ability.slot}>
            <Text style={styles.abilityName}>{ability.displayName}</Text>
            <Text>{ability.description}</Text>
          </View>
        ))}
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  agentImage: {
    width: '100%',
    height: 400, // Adjust the height as needed
    resizeMode: 'cover',
    marginBottom: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  abilityContainer: {
    marginLeft: 16,
    marginTop: 8,
  },
  abilityName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default DetailScreen;
