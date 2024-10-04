// NotificationsScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card, Title } from 'react-native-paper';

const NotificationsScreen = () => {
  const notifications = [
    { id: '1', message: 'John Doe liked your post.' },
    { id: '2', message: 'Jane Smith started following you.' },
    { id: '3', message: 'Alice Johnson commented on your photo.' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.message}</Title>
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

export default NotificationsScreen;
