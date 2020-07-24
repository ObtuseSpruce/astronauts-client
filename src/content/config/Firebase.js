import firebase from 'firebase'

console.log("heres the key", process.env.REACT_APP_TEST_KEY)
// set the firebaseConfig to the right keys
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: '',
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  }; 

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase