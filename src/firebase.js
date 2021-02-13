// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyAPJgyNTOA0KQAOotYIDvf-qi7-qCu8Qfc",
  authDomain: "netflix-clone-605b2.firebaseapp.com",
  projectId: "netflix-clone-605b2",
  storageBucket: "netflix-clone-605b2.appspot.com",
  messagingSenderId: "554116249713",
  appId: "1:554116249713:web:061951fda0ae864b2d43d0",
 
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {auth} 
export default db ;