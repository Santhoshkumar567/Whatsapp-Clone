import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWRmP5y3u1ZppNWFgjFONHLltgELBeuU0",
  authDomain: "whatsapp-clone-f4407.firebaseapp.com",
  projectId: "whatsapp-clone-f4407",
  storageBucket: "whatsapp-clone-f4407.appspot.com",
  messagingSenderId: "912033229089",
  appId: "1:912033229089:web:00c15cdfc3e7c32213b660"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
