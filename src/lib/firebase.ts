import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDJaIq4pAy_oJY0p8_zmfO_ZZ0v4AhqxKw",
  authDomain: "manabesu-githubio.firebaseapp.com",
  databaseURL: "https://manabesu-githubio-default-rtdb.firebaseio.com",
  projectId: "manabesu-githubio",
  storageBucket: "manabesu-githubio.firebasestorage.app",
  messagingSenderId: "1088701237489",
  appId: "1:1088701237489:web:83fd17418ad5f67ca50150",
  measurementId: "G-PWB2N9WYW6"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
