// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
apiKey: "AIzaSyA9uR1TspWIsI62L5ROH1h5aLQViB2BSPU",
  authDomain: "final-effort-b5f1c.firebaseapp.com",
  projectId: "final-effort-b5f1c",
  storageBucket: "final-effort-b5f1c.appspot.com",
  messagingSenderId: "928906602001",
  appId: "1:928906602001:web:142e79a11033363ed3b3b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;