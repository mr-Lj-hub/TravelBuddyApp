import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Title, Paragraph, BottomNavigation } from 'react-native-paper';
import MyNetwork from './MyNetwork';
import ProfileScreen from './ProfileScreen';
import Notifications from './Notifications';

function HomeFeed() {
  return (
    <ScrollView style={styles.feedContainer}>
      {/* Sample feed item 1 */}
      <Card style={styles.feedItem}>
        <Card.Cover source={{ uri: 'https://via.placeholder.com/300' }} />
        <Card.Content>
          <Title>Exciting Trip to Bali!</Title>
          <Paragraph>Had a wonderful time exploring the beaches and culture.</Paragraph>
        </Card.Content>
      </Card>

      {/* Sample feed item 2 */}
      <Card style={styles.feedItem}>
        <Card.Cover source={{ uri: 'https://via.placeholder.com/300' }} />
        <Card.Content>
          <Title>Adventure in the Mountains</Title>
          <Paragraph>Climbed to the top of the world. The view was breathtaking!</Paragraph>
        </Card.Content>
      </Card>

      {/* Add more feed items here */}
    </ScrollView>
  );
}



function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header using Appbar */}
      <Appbar.Header>
        <Appbar.Content title="Travel Buddy" />
        <Appbar.Action icon="account" onPress={() => navigation.navigate('Profile')} />
      </Appbar.Header>

      {/* Feed */}
      <HomeFeed />

      {/* Bottom Navigation */}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  feedContainer: {
    padding: 10,
  },
  feedItem: {
    marginBottom: 20,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
