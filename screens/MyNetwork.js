// MyNetworkScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';

const MyNetworkScreen = () => {
  const connections = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Alice Johnson' },
    { id: '4', name: 'Bob Brown' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={connections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.name}</Title>
              <Button mode="contained" onPress={() => console.log(`Chat with ${item.name}`)}>
                Chat
              </Button>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 10,
  },
});

export default MyNetworkScreen;
