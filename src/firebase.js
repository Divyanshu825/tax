import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCakXRrhLC2Sx-yOlNuvi2QbnHem7BvKCE",
  authDomain: "taxconsultent-1bcd0.firebaseapp.com",
  databaseURL: "https://taxconsultent-1bcd0-default-rtdb.firebaseio.com",
  projectId: "taxconsultent-1bcd0",
  storageBucket: "taxconsultent-1bcd0.appspot.com",
  messagingSenderId: "795434927395",
  appId: "1:795434927395:web:3f466d945d0caed8f4f896"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app,auth,db}
