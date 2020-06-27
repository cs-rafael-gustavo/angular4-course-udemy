import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.NG_APP_APIKEY,
  authDomain: process.env.NG_APP_AUTHDOMAIN,
  databaseURL: process.env.NG_APP_DATABASEURL,
  projectId: process.env.NG_APP_PROJECTID,
  storageBucket: process.env.NG_APP_STORAGEBUCKET,
  messagingSenderId: process.env.NG_APP_MESSAGINGSENDERID,
  appId: process.env.NG_APP_APPID,
  measurementId: process.env.NG_APP_MEASUREMENTID,
};

export const app = firebase.initializeApp(firebaseConfig);
