// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";  // Add Firestore for database interactions
import { getAuth } from "firebase/auth";  // Add Authentication if you're using it

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaVnnccfk093yQydOTLg9D2GIEE_vcKbc",
  authDomain: "local-legend-8dee2.firebaseapp.com",
  projectId: "local-legend-8dee2",
  storageBucket: "local-legend-8dee2.firebasestorage.app",
  messagingSenderId: "259400327105",
  appId: "1:259400327105:web:9912b9e47fd3a1ad7fd940",
  measurementId: "G-LJ68ZEDWQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics (optional)
const analytics = getAnalytics(app);

// Initialize Firestore and Auth
const db = getFirestore(app); // Firestore instance
const auth = getAuth(app); // Auth instance

// Export Firebase app, firestore, and auth instances for use in other files
export { app, db, auth };
export default app;
