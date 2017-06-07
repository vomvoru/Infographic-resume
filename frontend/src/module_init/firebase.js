import firebase from 'firebase/app'

const config = {
  apiKey: "AIzaSyBFZlxJIuzRIH971w2TX21xrwViSIgV7n4",
  authDomain: "infographic-resume.firebaseapp.com",
  databaseURL: "https://infographic-resume.firebaseio.com",
  projectId: "infographic-resume",
  storageBucket: "infographic-resume.appspot.com",
  messagingSenderId: "955339768787"
};

firebase.initializeApp(config);
