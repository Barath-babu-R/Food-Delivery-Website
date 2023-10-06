import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDiWKjNgE0rQ-laZ2XZUCuQkxpAdKAtpiY",
  authDomain: "restaurantapp-8ebb1.firebaseapp.com",
  databaseURL: "https://restaurantapp-8ebb1-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-8ebb1",
  storageBucket: "restaurantapp-8ebb1.appspot.com",
  messagingSenderId: "938533850936",
  appId: "1:938533850936:web:ed0e7c6efd3b0559907bcd"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
