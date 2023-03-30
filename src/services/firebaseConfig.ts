import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "loriginale-368b1.firebaseapp.com",
  projectId: "loriginale-368b1",
  storageBucket: "loriginale-368b1.appspot.com",
  messagingSenderId: "409095932320",
  appId: "1:409095932320:web:85beb48776adbe98653cc5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
