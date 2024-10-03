import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    // You can add your authentication logic here
    navigation.navigate('Home');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Login to Travel Buddy</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      <Button title="Login" onPress={login} />
      <Button title="Sign up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
}
