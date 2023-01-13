import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'house-marketplace-app-6acc2.firebaseapp.com',
  projectId: 'house-marketplace-app-6acc2',
  storageBucket: 'house-marketplace-app-6acc2.appspot.com',
  messagingSenderId: '787218386391',
  appId: '1:787218386391:web:6e14eae3ce2894aebbcf92',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
