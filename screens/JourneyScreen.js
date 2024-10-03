import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function JourneyScreen() {
  const [pnr, setPnr] = useState('');

  const validatePnr = () => {
    // Call API to validate PNR and join journey chat
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Enter Your PNR to Join Journey</Text>
      <TextInput
        placeholder="PNR"
        value={pnr}
        onChangeText={setPnr}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      <Button title="Validate & Connect" onPress={validatePnr} />
    </View>
  );
}
