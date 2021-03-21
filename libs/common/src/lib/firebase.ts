import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import {env} from "@placeme-poc/common";

const firebaseConfig = {
  apiKey: env.FIREBASE.API_KEY,
  authDomain: `${env.FIREBASE.PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${env.FIREBASE.PROJECT_ID}.firebaseio.com`,
  projectId: `${env.FIREBASE.PROJECT_ID}`,
  storageBucket: `${env.FIREBASE.PROJECT_ID}.appspot.com`,
  appId: env.FIREBASE.PROJECT_ID,
};

export const firebaseClient = firebase.initializeApp(firebaseConfig);
