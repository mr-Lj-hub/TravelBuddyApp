import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Your Profile</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/100' }}
        style={{ width: 100, height: 100 }}
      />
      <Text>Name: John Doe</Text>
      <Text>Email: john.doe@example.com</Text>
    </View>
  );
}
