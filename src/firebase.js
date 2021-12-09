import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBpw3Xa-lRSzfc9o7o9Y5ZO5QHWnIHPgZY',
  authDomain: 'linkedin-vol2.firebaseapp.com',
  projectId: 'linkedin-vol2',
  storageBucket: 'linkedin-vol2.appspot.com',
  messagingSenderId: '14716704284',
  appId: '1:14716704284:web:d30ea19a19c671c816f1d9',
  measurementId: 'G-4N64SMEQPH',
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
