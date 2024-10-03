import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Welcome to Travel Buddy!</Text>
      <Button title="Start Journey" onPress={() => navigation.navigate('Journey')} />
      <Button title="View Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
