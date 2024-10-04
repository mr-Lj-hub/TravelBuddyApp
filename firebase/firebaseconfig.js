import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB66bIdrHTfoVDKQM9KxFWftkXIIdNMkTA",
    authDomain: "travelbuddy-34822.firebaseapp.com",
    projectId: "travelbuddy-34822",
    storageBucket: "travelbuddy-34822.appspot.com",
    messagingSenderId: "61375822078",
    appId: "1:61375822078:web:d84844f177d9af3b448daf",
    measurementId: "G-YJWBV34NW5"
};

const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);
const realtimeDb = getDatabase(app);

export { auth, firestore, realtimeDb };
