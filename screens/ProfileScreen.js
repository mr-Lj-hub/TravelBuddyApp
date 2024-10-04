// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProfileScreen = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Travel enthusiast and photographer.',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      <Button title="Edit Profile" onPress={() => console.log('Edit Profile')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ProfileScreen;
