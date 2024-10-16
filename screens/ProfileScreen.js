import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { auth, firestore ,storage} from '../firebase/firebaseconfig'; 

import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export default function ProfileScreen() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    bio: '',
    profilePic: '',
    uploadedPhotos: [],
  });
  const [editing, setEditing] = useState(false);
  const userId = auth.currentUser.uid;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDocRef = doc(firestore, 'users', userId);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };
    fetchUserData();
  }, []);

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const storageRef = storage().ref(`uploadedPhotos/${userId}/${Date.now()}.jpg`);
    
    await storageRef.put(blob);
    const url = await storageRef.getDownloadURL();
    return url;
  };

  const updateUserData = async () => {
    try {
      const updatedProfilePicUrl = userData.profilePic ? await uploadImage(userData.profilePic) : userData.profilePic;
      const userDocRef = doc(firestore, 'users', userId);
      await setDoc(userDocRef, {
        name: userData.name,
        email: userData.email,
        bio: userData.bio,
        profilePic: updatedProfilePicUrl,
        uploadedPhotos: userData.uploadedPhotos, // Keep existing uploaded photos
      });
      setEditing(false);
    } catch (error) {
      console.error('Error updating profile: ', error);
    }
  };

  const uploadProfilePic = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      setUserData({ ...userData, profilePic: imageUri });
    } else {
      console.log('Image selection was cancelled or no image was selected.');
    }
  };

  const testImageUpload = async () => {
    const imageUri = 'path-to-local-image'; // Example local path or URI
    try {
      const response = await fetch(imageUri);
      const blob = await response.blob();
      const storageRef = storage().ref('testUpload.jpg');
      await storageRef.put(blob);
      const downloadUrl = await storageRef.getDownloadURL();
      console.log('Download URL:', downloadUrl);
    } catch (error) {
      console.error('Error uploading test image: ', error);
    }
  };
  

  const uploadNewPhoto = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      const photoUrl = await uploadImage(imageUri); // Upload the new photo

      // Update the Firestore document with the new photo URL
      const userDocRef = doc(firestore, 'users', userId);
      await updateDoc(userDocRef, {
        uploadedPhotos: [...userData.uploadedPhotos, photoUrl], // Append the new photo URL
      });

      // Update the local state to show the new photo immediately
      setUserData((prevData) => ({
        ...prevData,
        uploadedPhotos: [...prevData.uploadedPhotos, photoUrl], // Update the local uploaded photos
      }));
    } else {
      console.log('Image selection was cancelled or no image was selected.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={uploadProfilePic}>
        <Image
          source={userData.profilePic ? { uri: userData.profilePic } : require('../assets/defaultProfilePic.png')}
          style={styles.profilePic}
        />
      </TouchableOpacity>

      {editing ? (
        <>
          <TextInput
            value={userData.name}
            onChangeText={(text) => setUserData({ ...userData, name: text })}
            placeholder="Name"
            style={styles.input}
          />
          <TextInput
            value={userData.bio}
            onChangeText={(text) => setUserData({ ...userData, bio: text })}
            placeholder="Bio"
            style={styles.input}
          />
          <Button title="Save" onPress={updateUserData} />
        </>
      ) : (
        <>
          <Text style={styles.name}>{userData.name || 'No Name'}</Text>
          <Text style={styles.email}>{userData.email || 'No Email'}</Text>
          <Text style={styles.bio}>{userData.bio || 'No Bio'}</Text>
          <Button title="Edit Profile" onPress={() => setEditing(true)} />
        </>
      )}

      {/* Button to upload a new photo */}
      <TouchableOpacity style={styles.uploadButton} onPress={uploadNewPhoto}>
        <Text style={styles.uploadButtonText}>+ Upload Photo</Text>
      </TouchableOpacity>

      {/* Display uploaded photos */}
      <FlatList
        data={userData.uploadedPhotos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.uploadedPhoto} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
  },
  uploadButton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  uploadedPhoto: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
