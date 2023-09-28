
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from  'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeXlbIpUJGy8WeJK3FFYx_HlTNFk06Jcs",
  authDomain: "fxmarket-be674.firebaseapp.com",
  projectId: "fxmarket-be674",
  storageBucket: "fxmarket-be674.appspot.com",
  messagingSenderId: "719508059348",
  appId: "1:719508059348:web:e4a97f0d2d22499863b741",
  measurementId: "G-T0NF870VGW"
};

 export const app = initializeApp(firebaseConfig);
 const auth =  getAuth(app)
const analytics = getAnalytics(app);
export const db = getFirestore(app)