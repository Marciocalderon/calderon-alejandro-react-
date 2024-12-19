import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDH-G6VAn-4dgbtuxyXJRRv7UFANEFeuq0",
  authDomain: "tienda-frodo.firebaseapp.com",
  projectId: "tienda-frodo",
  storageBucket: "tienda-frodo.firebasestorage.app",
  messagingSenderId: "972502160322",
  appId: "1:972502160322:web:1705a53db61d7c80eebc5b"
};

export const app = initializeApp(firebaseConfig)