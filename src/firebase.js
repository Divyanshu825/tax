// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAWgPgxC15hjbmrx2gmWSI718BlS_EO2Fg",
  authDomain: "dreamsakar-9c9c1.firebaseapp.com",
  projectId: "dreamsakar-9c9c1",
  storageBucket: "dreamsakar-9c9c1.appspot.com",
  messagingSenderId: "930353965068",
  appId: "1:930353965068:web:da7c74ec04407ed599a629",
  measurementId: "G-QTM5VVK3RC"

}
const app = initializeApp(firebaseConfig)
const firdb = getFirestore(app)
const storage = getStorage(app);
const auth = getAuth(app)
export { firdb, storage, auth }