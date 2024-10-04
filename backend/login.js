import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const logIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in:', userCredential.user);
  } catch (error) {
    console.error('Error logging in:', error);
  }
};
