import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // from your firebase.js file

const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User created:', userCredential.user);
  } catch (error) {
    console.error('Error signing up:', error);
  }
};
