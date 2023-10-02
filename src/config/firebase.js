import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKX_mZ5u9Q3KOb_n6mqcfWK7AhxZHXmpI",
  authDomain: "learninglanguage-12887.firebaseapp.com",
  projectId: "learninglanguage-12887",
  storageBucket: "learninglanguage-12887.appspot.com",
  messagingSenderId: "597571803055",
  appId: "1:597571803055:web:d7f14758b6fceef777015a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);