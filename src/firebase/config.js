// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3fEwaobhhbUNqyXwy42h9iYhubMvzpN4",
  authDomain: "trbecommerce-84fbb.firebaseapp.com",
  projectId: "trbecommerce-84fbb",
  storageBucket: "trbecommerce-84fbb.appspot.com",
  messagingSenderId: "587204344408",
  appId: "1:587204344408:web:55f7970e2b4ff5f131e82d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => {
    return app
}