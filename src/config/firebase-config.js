import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBLsJtgbPw_IwRVwHuwuyMjl0y-UFxDTKU",
  authDomain: "user-authentication-982c9.firebaseapp.com",
  projectId: "user-authentication-982c9",
  storageBucket: "user-authentication-982c9.appspot.com",
  messagingSenderId: "64322759385",
  appId: "1:64322759385:web:8d706e3c1bf995f0132cc8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
