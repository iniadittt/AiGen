import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZNg7tLzfbDfV0y-FAj-8-bDvpqKgZlmQ",
  authDomain: "aigen-platform.firebaseapp.com",
  projectId: "aigen-platform",
  storageBucket: "aigen-platform.appspot.com",
  messagingSenderId: "1068635929133",
  appId: "1:1068635929133:web:7ceb907120d1251e36d6a4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
