import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_API_ID,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // measurementId: process.env.REACT_APP_MESSAGIN_ID,
};
// REACT_APP_MEASUREMENT_Id=G-8GSGZQ44ST*/
// REACT_APP_DATABASE_URL=https://myapp-project-123.firebaseio.com

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();

export const dbService = firebase.firestore();
