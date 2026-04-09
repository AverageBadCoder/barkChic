/// <reference types="vite/client" />
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// 🐾 BARK CHIC - FIREBASE CONFIGURATION
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBLfnjxW7jiA_mqmk8jh5Jd0JwsFuldtmM",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "barkchic-7fbc7.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "barkchic-7fbc7",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "barkchic-7fbc7.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1071695423010",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "G-WB3R9XE009"
};

export const isFirebaseConfigured = firebaseConfig.apiKey !== "YOUR_API_KEY" && firebaseConfig.apiKey !== "";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Persistent local cache: writes go to IndexedDB immediately and sync to
// the server in the background, making saves feel instant.
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
});
export const storage = getStorage(app);
