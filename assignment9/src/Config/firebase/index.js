import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDctvyQ1Hy8xRa2s6iyRmYFWWBLgKot2no",
    authDomain: "fir-react-fea28.firebaseapp.com",
    databaseURL: "https://fir-react-fea28.firebaseio.com",
    projectId: "fir-react-fea28",
    storageBucket: "fir-react-fea28.appspot.com",
    messagingSenderId: "264633424254"
  };
//   firebase.initializeApp(config);
const fire = firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();
export { db, fire, auth, provider};