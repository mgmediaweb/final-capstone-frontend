/* eslint linebreak-style: ["error", "windows"] */
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAEa2EFEqEVByS4iQz-Cmn0QDnKljdPv7I',
  authDomain: 'exo-cars-5611d.firebaseapp.com',
  projectId: 'exo-cars-5611d',
  storageBucket: 'exo-cars-5611d.appspot.com',
  messagingSenderId: '533602546990',
  appId: '1:533602546990:web:ca83cb41b2d229a57f76bf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
