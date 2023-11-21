import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const AboutPage = () => {
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    fetchProvinces();
  }, []);

  const fetchProvinces = async () => {
    try {
      const response = await fetch('http://api.codespade.com:4517/codespade/api/bahasa-daerah/provinsi');
      const result = await response.json();

      setProvinces(result);
    } catch (error) {
      console.error('Error fetching provinces:', error);
    }
  };

  // Function to render a card for each section
  const renderSectionCard = (title, content) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardContent}>{content}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {renderSectionCard('About the Application', 'This application was made with the goal to make a Valorant Wiki, that is accessible anywhere. By making the wiki an app it allows people to fact-check faster.')}
      {renderSectionCard('About Valorant', 'Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows. Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020. The development of the game started in 2014. Valorant takes inspiration from the Counter-Strike series, borrowing several mechanics such as the buy menu, spray patterns, and inaccuracy while moving.')}

      {/* Add more sections as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FD4556',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cardContent: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'justify',
  },
  note: {
    fontSize: 14,
    color: 'gray',
  },
});

export default AboutPage;
